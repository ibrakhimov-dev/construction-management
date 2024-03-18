import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { base_url, all_object_api_url, create_income_api_url } from '../API/baseURL';
import axios from 'axios';

function CreateIncome() {
    const token = localStorage.getItem('accessToken');
    const [date, setDate] = useState('');
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [summa, setSumma] = useState(0);
    const [comment, setComment] = useState("");
    const [paymentType, setPaymentType] = useState('cash');
    const [currency, setCurrency] = useState("sum");
    const [currencyRate, setCurrencyRate] = useState(1);
    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })
    }, [])

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function createIncome() {
        if (object === null || date === "" || comment === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.post(create_income_api_url(), {
                "project_id": object,
                "summa": summa,
                "date": `${date.$y}-${correctDate(date.$M+ 1)}-${date.$D}`,
                "comment": comment,
                "income_type": paymentType,
                "currency": currency ,
                "currency_rate": currencyRate
            }, {headers}).then((res) => {
                navigate('/admin/income')
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Даромад қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={12} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Обект:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={object}
                                onChange={(e) => setObject(e.target.value) }
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
                        <FormControl fullWidth>
                            <Typography mt={2}>Сумма:</Typography>
                            <TextField autoComplete='off' value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth> 
                            <Typography mt={2}>Изоҳ:</Typography>
                            <TextField autoComplete='off'  value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Сана:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                        
                    </Grid>
                    <Grid xl={6} md={12} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Тўлов Турини:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="cash">Нахт</MenuItem>
                                <MenuItem value="transfer">Ўтқазма</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            paymentType === "cash" ? <>
                                <FormControl  fullWidth >
                                    <Typography mt={2}>Валюта:</Typography>
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
                                    <TextField autoComplete='off' value={currencyRate} onChange={(e) => setCurrencyRate(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                                </FormControl>
                            </> : <></>
                        }
                        <Button onClick={createIncome} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Даромад қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default CreateIncome