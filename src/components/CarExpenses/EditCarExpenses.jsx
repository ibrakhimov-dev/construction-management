import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Stack, Typography, FormControl, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { base_url, edit_car_expenses_api_url, current_car_expenses_api_url } from '../API/baseURL';
import axios from 'axios';
import dayjs from 'dayjs';

function EditCarExpenses() {
    const [comment, setComment] = useState('');
    const [date, setDate] = useState("");
    const [summa, setSumma] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(current_car_expenses_api_url(location.state.id), {headers})
        .then((res) => {
            console.log(res.data.data);
            setDate(dayjs(res.data.data.date));
            setComment(res.data.data.comment);
            setSumma(res.data.data.summa)
        })
    }, [])

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function editCarExpenses () {
        axios.put(edit_car_expenses_api_url(location.state.id), {summa: summa, date: `${date.$y}-${correctDate(date.$M+ 1)}-${date.$D}`, comment: comment,}, {headers})
        .then((res) => {
            navigate('/home/car-expenses')
        })
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Mashina xarajatlarni taxrirlash</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Izoh:</Typography>
                            <TextField value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Sana:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Sana" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        
                    <FormControl fullWidth>
                            <Typography>Summa (so'm):</Typography>
                            <TextField value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl> 
                        <Button onClick={editCarExpenses} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Tahrirlash
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditCarExpenses;