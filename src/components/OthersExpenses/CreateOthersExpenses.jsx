import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Stack, Typography, FormControl, TextField, Button, Select, MenuItem} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { base_url, create_others_expenses_api_url } from '../API/baseURL';
import axios from 'axios';
import { errorAlert, succesAlert, Alert } from '../Alert/Alert';

function CreateOthersExpenses() {
    const [errorComment, setErrorComment] = useState(false);
    const [errorDate, setErrorDate] = useState(false);
    const [errorSumma, setErrorSumma] = useState(false);
    const [helperTextComment, setHelperTextComment] = useState("");
    const [helperTextDate, setHelperTextDate] = useState("");
    const [helperTextSumma, setHelperTextSumma] = useState("");
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

    function createOtherExpenses () {
        // if (comment === "" || date === "" || summa === null) {
        //     alert("Илтимос сўралган малумотларни тўлдиринг!");
        // }else {
            axios.post(create_others_expenses_api_url(), {
                summa: summa, 
                date: `${date.$y}-${correctDate(date.$M+ 1)}-${date.$D}`, 
                comment: comment,
                currency: currency,
                currency_rate: currencyRate,
            }, {headers})
            .then((res) => {
                setErrorComment(false);
                setErrorDate(false);
                setErrorSumma(false);
                setHelperTextComment("");
                setHelperTextDate("");
                setHelperTextSumma("");
                succesAlert();
                setTimeout(() => {
                    navigate('/admin/others-expenses')
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.comment ? err.response.data.errors.comment[0] : "" === 'The comment field must be a string.') {
                    setErrorComment(true);
                    setHelperTextComment("Илтимос изоҳ қолдиринг!");
                }else {
                    setErrorComment(false);
                    setHelperTextComment("");
                }
                if (err.response.data.errors.date ? err.response.data.errors.date[0] : "" === 'The date field must be a valid date.') {
                    setErrorDate(true);
                    setHelperTextDate("Илтимос вақтни киритинг!")
                }else {
                    setErrorDate(false);
                    setHelperTextDate("");
                }
                if (err.response.data.errors.summa ? err.response.data.errors.summa[0] : "" === 'The summa field is required.') {
                    setHelperTextSumma("Илтимос суммани киритинг!")
                    setErrorSumma(true)
                } else {
                    setErrorSumma(false);
                    setHelperTextSumma("");
                }
                errorAlert()
            })
        // }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Бошқа харажатлар қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Изоҳ:</Typography>
                            <TextField error={errorComment} helperText={helperTextComment} autoComplete='off' value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Сумма ({currency}):</Typography>
                            <TextField error={errorSumma} helperText={helperTextSumma} autoComplete='off' color='warning' id="outlined-basic" value={summa} onChange={(e) => setSumma(e.target.value)} type='number' variant="outlined" />
                        </FormControl> 
                        <FormControl fullWidth>
                            <Typography mt={2}>Сана:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker slotProps={{
                                            textField: {
                                            error: errorDate, 
                                            helperText: helperTextDate, 
                                            },
                                        }} value={date} onChange={(e) => setDate(e)} label="Сана:" />
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
                        <Button onClick={createOtherExpenses} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Бошқа харажатлар қўшиш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateOthersExpenses;