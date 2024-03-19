import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import { base_url, all_object_api_url, all_user_api_url, current_expenses_api_url, edit_expenses_api_url } from '../API/baseURL';
import axios from 'axios';
import dayjs from 'dayjs';
import { Alert, editAlert, errorAlert } from '../Alert/Alert';

function EditCost() {
    const location = useLocation();
    const role = localStorage.getItem("role");
    const [objectSelect, setObjectSelect] = useState("");
    const [allUser, setAllUser] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [allObject, setAllObject] = useState([]);
    const [paymentType, setPaymentType] = useState('cash');
    const [category, setCategory] = useState("");
    const [currency, setCurrency] = useState("sum");
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [summa, setSumma] = useState(0);
    const [date, setDate] = useState("");
    const [currencyRate, setCurrencyRate] = useState(1);
    

    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect (() => {
        axios.get(current_expenses_api_url(location.state.id), {headers})
        .then((res) => {
            console.log(res.data)
            setCategory(res.data.data.category)
            setObjectSelect(res.data.data.project_id)
            setCurrentUser(res.data.data.user_id)
            setSumma(res.data.data.summa);
            setDate(dayjs(res.data.data.date));
            setPaymentType(res.data.data.expense_type);
            setCurrency(res.data.data.currency);
            setCurrencyRate(res.data.data.currency_rate);
            setComment(res.data.data.comment);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })

        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })

        axios.get(all_user_api_url(), {headers})
        .then((res) => {
            setAllUser(res.data.data)
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function editExpenses () {
        if (comment === "" || date === "" || objectSelect === "" || currentUser === "" || objectSelect === "" || category === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.put(edit_expenses_api_url(location.state.id), {
                "user_id": currentUser,
                "category": category,
                "project_id": objectSelect,
                "summa":  summa,
                "date": `${date.$y}-${correctDate(date.$M+ 1)}-${date.$D}`,
                "comment": comment ,
                "expense_type": paymentType,
                "currency": currency,
                "currency_rate": currencyRate 
            }, {headers}).then((res) => {
                editAlert()
                setTimeout(() => {
                    navigate(`/${role}/cost`)
                }, 2000)
            }).catch((err) => {
               errorAlert()
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Харажат қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} xm={12} sm={12} xs={12} p={2}>
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
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
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
                        <FormControl  fullWidth>
                            <Typography mt={2}>Иш Бошқарувчи:</Typography>
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
                        <FormControl fullWidth>
                            <Typography mt={2}>Сумма ({currency}):</Typography>
                            <TextField autoComplete='off' value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
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
                    <Grid xl={6} xm={12} sm={12} xs={12} p={2}>
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
                            paymentType === 'cash' ? <>
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
                            </> : 
                            <> </>
                        }
                        
                        <FormControl fullWidth>
                            <Typography mt={2}>Изоҳ:</Typography>
                            <TextField autoComplete='off' value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" variant="outlined" />
                        </FormControl>
                        
                            <Button onClick={editExpenses} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Таҳрирлаш
                            </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default EditCost;