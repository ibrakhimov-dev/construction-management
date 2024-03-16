import { Stack, Grid, Typography, FormControl, Pagination, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';
import CostTable from './CostTable';
import axios from 'axios';
import { base_url, all_user_api_url, all_object_api_url, delete_expenses_api_url, expenses_api_url, role_api_url } from '../API/baseURL';

function Cost() {
    const [role, setRole] = useState('admin');
    const [objectSelect, setObjectSelect] = useState("");
    const [allUser, setAllUser] = useState([]);
    const [category, setCategory] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [allObject, setAllObject] = useState([]);
    const [totalSumma, setTotalSumma] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const navigate = useNavigate();
    const [expensesData, setExpensesData] = useState();
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);

    const handleChange = (event, value) => {
        setPage(value);
      };

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect (() => {
        axios.get(expenses_api_url(),{
            params: {
                page: page,
                project_id: objectSelect,
                category: category,
                user_id: currentUser,
                start_date: startDate?`${startDate.$y}-${correctDate(startDate.$M + 1)}-${startDate.$D}`:'',
                end_date: endDate?`${endDate.$y}-${correctDate(endDate.$M + 1)}-${endDate.$D}`:"",
            }, headers
        }).then((res) => {
            setTotalSumma(res.data.total_amount);
            setExpensesData(res.data.data)
            setCountPage(res.data.meta.last_page);
            setPage(res.data.meta.current_page);
            setDefoultPage(res.data.meta.current_page);
        }).catch((err) => {
            console.log(err)
        });

        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })

        axios.get(all_user_api_url(), {headers})
        .then((res) => {
            setAllUser(res.data.data)
        })

        axios.get(role_api_url(), {headers})
        .then((res) => {
        setRole(res.data.role_user)
        })
    }, [page, objectSelect, category, currentUser, startDate, endDate, isAgreeDelete])

    function deleteExpenses (id) {
        axios.delete(delete_expenses_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

  return (
    <Stack  pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Харажатлар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3} >
                    <Grid item xl={2} md={4} sm={4} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Cатегорй:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={category}
                                onChange={(e) => setCategory(e.target.value) }
                            >
                                <MenuItem value="salary">Иш ҳақи</MenuItem>
                                <MenuItem value="food">Озиқ-овқат</MenuItem>
                                <MenuItem value="tool">Ускуна</MenuItem>
                                <MenuItem value="other">Бошқа харажатлар</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={2} md={4} sm={4} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Обект:</Typography>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
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
                    <Grid item xl={3} md={4} sm={4} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Иш Бошқарувчи:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={currentUser}
                                onChange={(e) => setCurrentUser(e.target.value) }
                            >
                                {
                                    allUser.map((item, index) => {
                                        return (
                                            <MenuItem key={index + 1} value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid mt={2} item xl={5} md={12} sm={12} xs={12} display='flex' flexWrap={{xl: 'nowrap', md: 'nowrap', sm: 'nowrap', xs: 'wrap'}} justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} gap={2}>                      
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
                    <Grid item xl={12} md={12} sm={12} xs={12} display='flex' flexWrap={{xl: 'nowrap', md: 'nowrap', sm: 'nowrap', xs: 'wrap'}} gap={1} justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} alignItems='center'>
                        <a 
                        href={`${base_url}/api/xarajat/export/?project_id=${objectSelect}&user_id=${currentUser}&category=${category}&start_date=${startDate}&end_date=${endDate}`}
                        download={`${base_url}/api/xarajat/export/?project_id=${objectSelect}&user_id=${currentUser}&category=${category}&start_date=${startDate}&end_date=${endDate}`}>
                            <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button></a>
                        {
                            role === 'admin' ? <Button onClick={() => navigate('/home/create-cost')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Харажат қўшиш
                            </Button> : <></>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <CostTable deleteExpenses={deleteExpenses} totalSumma={totalSumma} ExpensesData={expensesData}/>
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



export default Cost