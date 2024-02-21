import { Stack, Grid, Typography, Pagination, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useState, useEffect } from 'react';
import DailyExpensesTable from './DailyExpensesTable';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url, house_expenses_api_url, house_expenses_day_api_url, delete_house_expense_api_url } from '../API/baseURL';

function DailyExpenses() {
    const [houseExpensesDate, setHouseExpensesDate] = useState([]);
    const [totalSumma, setTotalSumma] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const navigate = useNavigate()
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const token = localStorage.getItem('accessToken');
    const [isAgreeDelete, setIsAgreeDelete] = useState(false)

    const handleChange = (event, value) => {
        setPage(value);
    };
  
    const headers = {
        'Content-Type': 'application/json',
        // 'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url,
    }
    
    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    useEffect (() => {
        axios.post(house_expenses_api_url(), {page: page ,start_date: startDate?`${startDate.$y}-${correctDate(startDate.$M + 1)}-${startDate.$D}`:'', end_date: endDate?`${endDate.$y}-${correctDate(endDate.$M + 1)}-${endDate.$D}`:""  } , {headers})
        .then((res) => {
            console.log(res.data.data)
            setHouseExpensesDate(res.data.data.data)
            setTotalSumma(res.data.totalAmount)
            setCountPage(res.data.data.last_page);
            setPage(res.data.data.current_page);
            defoultPage(res.data.data.current_page);
        }).catch((err) => {
            console.log(err)
        })
    }, [endDate, startDate, page, isAgreeDelete])

    function deleteHouseExpenses (id) {
        axios.delete(delete_house_expense_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2500)
    }

    function tenDay() {
        axios.get(house_expenses_day_api_url(10), {headers})
        .then((res) => {
            setHouseExpensesDate(res.data.data)
            setTotalSumma(res.data.totalAmount)
        }).catch((err) => {

        })
    }

    function thirtyDay() {
        axios.get(house_expenses_day_api_url(30), {headers})
        .then((res) => {
            setHouseExpensesDate(res.data.data)
            setTotalSumma(res.data.totalAmount)
        }).catch((err) => {

        })
    }


  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Уй Харажатлар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={12} sm={12} xs={12} display='flex' gap={1} justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} alignItems='center'>
                        <Button onClick={tenDay} sx={{height: '55px', mt: 1}} size='large' variant='outlined' color='primary'>
                            10 кунлик
                        </Button>
                        <Button onClick={thirtyDay} sx={{height: '55px', mt: 1}} size='large' variant='outlined' color='primary'>
                            30 кунлик
                        </Button> 
                    </Grid>
                    <Grid item xl={5} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} flexWrap={{xl: 'nowrap', md: 'wrap', sm: 'wrap', xs: "wrap"}} gap={2}>
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
                    <Grid item xl={4} md={12} sm={12} xs={12} display='flex' gap={1} justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} flexWrap='wrap' alignItems='center'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button>
                        <Button onClick={() => navigate('/home/create-daily-expenses')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Харажат қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <DailyExpensesTable deleteHouseExpenses={deleteHouseExpenses} totalSumma={totalSumma} houseExpensesData={houseExpensesDate} />
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

export default DailyExpenses