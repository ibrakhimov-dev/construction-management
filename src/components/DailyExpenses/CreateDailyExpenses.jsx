import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Stack, Typography, FormControl, TextField, Button, Select, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { base_url, create_house_expenses_api_url } from '../API/baseURL';
import { useState } from 'react';
import axios from 'axios';
import { Alert, succesAlert, errorAlert} from '../Alert/Alert';

function CreateDailyExpenses() {
    const [currency, setCurrency] = useState('sum');
    const [currencyRate, setCurrencyRate] = useState(1);
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [summa, setSumma] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
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

    function createHouseExpenses () {
        if(summa === null || comment === "" || date === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.post(create_house_expenses_api_url(), {
                summa: summa, 
                date: `${date.$y}-${correctDate(date.$M+ 1)}-${date.$D}`, 
                comment: comment,
                currency: currency,
                currency_rate: currencyRate,}, {headers})
            .then((res) => {
                    succesAlert();
                    setTimeout(() => {
                        navigate('/admin/daily-expenses')
                    }, 2000)
            }).catch((err) => {
                errorAlert();
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Уй харажатлар қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Изоҳ:</Typography>
                            <TextField autoComplete='off' value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Сумма ({currency}):</Typography>
                            <TextField autoComplete='off' color='warning' value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Sana:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                    <FormControl  fullWidth >
                            <Typography>Валюта:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='dollar'>Usd</MenuItem>
                                <MenuItem value="sum">Сўм</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Валюта курси (сўм):</Typography>
                            <TextField autoComplete='off' color='warning' value={currencyRate} onChange={(e) => setCurrencyRate(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>  
                        <Button onClick={createHouseExpenses} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Уй харажатлари қўшиш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateDailyExpenses;