import { Stack, Grid, Typography, Pagination, Select, FormControl, MenuItem, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import WorkerTable from './WorkerTable';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { base_url, worker_api_url, delete_worker_api_url, all_object_api_url} from '../API/baseURL';
import axios from 'axios';

function Worker() {
    const role = localStorage.getItem("role")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isAgreeMonthly, setIsAgreeMothly] = useState(false);
    const [workerData, setWorkerData] = useState([]);
    const [objectSelect, setObjectSelect] = useState("");
    const [allObject, setAllObject] = useState([]);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const token = localStorage.getItem('accessToken');
    const [isAgreeExport, setIsAgreeExport] = useState("");
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }
    

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function oylik () {
        if (objectSelect === "") {
            alert("Илтимос объектни танланг!");
        }else {
            setIsAgreeMothly(true)
        }
    }

    function exportOylik () {
        setEndDate("");
        setStartDate("");
        setIsAgreeMothly(false);
    }

    const handleChange = (event, value) => {
        setPage(value);
      };

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })

        axios.get(worker_api_url(), {
            params: {
                search: name,
                position: position,
                project_id: objectSelect
            },
            headers: headers
        }).then((res) => {
            setWorkerData(res.data.data);
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page);
        })
    }, [isAgreeDelete, objectSelect, position, name, page])

    function deleteWorker (id) {
        axios.delete(delete_worker_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ишчилар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} >
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                {
                    isAgreeMonthly ? <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} display='flex' justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} flexWrap={{xl: 'nowrap', md: 'nowrap', sm: 'wrap', xs: "wrap"}} gap={2}>
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
                    <Grid item xl={6} md={6} sm={6} xs={12}  display='flex' justifyContent='flex-end'>
                        <a style={startDate === "" || endDate === "" ? {pointerEvents: 'none',
                                        color: '#ccc'} : {}} href={`${base_url}/api/ishchilar/calculate-salary/?project_id=${objectSelect}&start_date=${startDate.$y}-${correctDate(startDate.$M + 1)}-${startDate.$D}&end_date=${endDate.$y}-${correctDate(endDate.$M + 1)}-${endDate.$D}`} 
                        download={`${base_url}/api/ishchilar/calculate-salary/?project_id=${objectSelect}&start_date=${startDate.$y}-${correctDate(startDate.$M + 1)}-${startDate.$D}&end_date=${endDate.$y}-${correctDate(endDate.$M + 1)}-${endDate.$D}`}> 
                        <Button disabled={startDate === "" || endDate === "" ? true : false} onClick={exportOylik} sx={{height: '55px', mt: 1, mr: 1}}  size='large' variant='contained' color='success' endIcon={<PriceCheckIcon />}>
                            Ойлик чиқариш
                        </Button></a>
                        <Button onClick={() => setIsAgreeMothly(false)} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' >
                            <ArrowBackIcon />
                        </Button>
                    </Grid>
                </Grid> : <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                    <FormControl  fullWidth>
                            <Typography>Лавозими:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={position}
                                onChange={(e) => setPosition(e.target.value) }
                            >
                                <MenuItem value="brigadier">Бригадир</MenuItem>
                                <MenuItem value="master">Мастер</MenuItem>
                                <MenuItem value="fitter">Тўқувчи(Чилангар)</MenuItem>
                                <MenuItem value="form_worker">Опалубщик</MenuItem>
                                <MenuItem value="worker">Оддий ишчи</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
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
                    <Grid item xl={3} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                       {
                        role === 'admin' ? <Button onClick={oylik} sx={{height: '55px', mt: 3, mr: 1}} size='large' variant='contained' color='success' endIcon={<PriceCheckIcon />}>
                        Ойлик
                        </Button> : <></>
                       }
                        <Button onClick={() => navigate(`/${role}/create-worker`)} sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Ишчи қўшиш
                        </Button>
                    </Grid>
                </Grid>
                }
            </Grid>
        </Grid>
        <WorkerTable workerData={workerData} deleteWorker={deleteWorker}/>
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

export default Worker