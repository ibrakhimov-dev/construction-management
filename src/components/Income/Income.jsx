import { Stack, Grid, Typography, FormControl, Pagination, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react'
import IncomeTable from './IncomeTable';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url, income_api_url, delete_income_api_url, all_object_api_url } from '../API/baseURL';

function Income() {
    const [objectSelect, setObjectSelect] = useState(""); 
    const [income, setIncome] = useState([])
    const [allObject, setAllObject] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalSumma, setTotalSumma] = useState(null);
    const navigate = useNavigate()
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url,
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })
        axios.post(income_api_url(), {
            "project_id": objectSelect,
            "start_date": startDate?`${startDate.$y}-${correctDate(startDate.$M + 1)}-${startDate.$D}`:'' ,
            "end_date": endDate?`${endDate.$y}-${correctDate(endDate.$M + 1)}-${endDate.$D}`:"",
            page: page,
        }, {headers}).then((res) => {
            setTotalSumma(res.data.total_amount);
            setIncome(res.data.data)
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page)
        })
    }, [page, startDate, endDate, objectSelect, isAgreeDelete])

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function deleteIncome (id) {
        axios.delete(delete_income_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }
    
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Даромадлар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={4} sm={4} xs={12}>
                        <FormControl sx={{marginTop: 1 }} fullWidth  >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Обектлар</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Обектлар"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                {
                                    allObject.map((item, index) => {
                                        return (
                                            <MenuItem key={index + 1} value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }   
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={5} md={8} sm={8} xs={12} display='flex' flexWrap={{xl: 'nowrap', md: 'nowrap', sm: 'nowrap', xs: 'wrap'}} justifyContent={{xl: 'flex-start', md: 'flex-start', sm: 'flex-end', xs: 'center'}} gap={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={startDate} onChange={(e) => setStartDate(e)} label="Дан (кун)" />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={endDate} onChange={(e) => setEndDate(e)} label="Гача (кун)" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xl={4} md={12} sm={12} xs={12} display='flex' flexWrap={{xl: 'nowrap', md: 'nowrap', sm: 'nowrap', xs: 'wrap'}} gap={1} justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} alignItems='center'>
                        <a href={`${base_url}/api/daromad/export/?project_id=${objectSelect}`}
                        download={`${base_url}/api/daromad/export/?project_id=${objectSelect}`}><Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button></a>
                        <Button onClick={() => navigate('/home/create-income')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Даромад қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <IncomeTable deleteIncome={deleteIncome} totalSumma={totalSumma} income={income} />
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={countPage} defaultPage={defoultPage} page={page} onChange={handleChange} />
                </Stack>
            </Grid>
        </Grid>
        
    </Stack>
  )
}



export default Income