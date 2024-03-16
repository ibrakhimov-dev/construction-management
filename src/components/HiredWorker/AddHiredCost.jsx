import { Paper, Stack, Grid, Typography, FormControl, Button,  IconButton, Select, MenuItem, TextField  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import { base_url, 
    create_hired_worker_expenses_api_url, 
    hired_worker_expenses_api_url, 
    delete_hired_worker_expenses_api_url, 
    edit_hired_worker_expenses_api_url } from '../API/baseURL';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';

function AddHiredCost(props) {
    const [currency, setCurrency] = useState('sum');
    const [currencyRate, setCurrencyRate] = useState(1);
    const [editCost, setEditCost] = useState(false);
    const [expensesId, setExpensesId] = useState(null);
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const [comment, setComment] = useState('');
    const [date, setDate] = useState("");
    const [summa, setSumma] = useState(0);
    const [editComment, setEditComment] = useState('');
    const [editDate, setEditDate] = useState("");
    const [editSumma, setEditSumma] = useState(null);
    const [editCurrency, setEditCurrency] = useState('sum');
    const [editCurrencyRate, setEditCurrencyRate] = useState(1);
    const [expenses, setExpenses] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect (() => {
        axios.get(hired_worker_expenses_api_url(props.workerId), {headers})
        .then((res) => {
            setExpenses(res.data.data);
        })
    }, [isAgreeDelete])

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function clickDay() {
        props.closeModal()
    }

    function deleteExpenses (id) {
        axios.delete(delete_hired_worker_expenses_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2500)
    }

    function createHiredWorkerExpenses () {
        if (date === "" || comment === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.post(create_hired_worker_expenses_api_url(), {
                summa: summa,
                date: date,
                comment: comment, 
                hired_worker_id: props.workerId,
                currency: currency,
                currency_rate: currencyRate,
             }, {headers}).then((res) => {
                 axios.get(hired_worker_expenses_api_url(props.workerId), {headers})
                 .then((res) => {
                     console.log(res.data.data);
                     setExpenses(res.data.data);
                     setDate("");
                     setComment("");
                     setSumma(0);
                     setCurrency('sum');
                     setCurrencyRate(1);
                })
             })
        }
    }

    function editClickButton (id) {
        let currentExpenses = expenses.filter((item) => {
            return item.id === id;
        });
        setEditCost(true);
        setExpensesId(id);
        setEditComment(currentExpenses[0].comment);
        setEditDate(currentExpenses[0].date);
        setEditSumma(currentExpenses[0].summa);
        setEditCurrency(currentExpenses[0].currency);
        setEditCurrencyRate(currentExpenses[0].currency_rate);
    }

    function editHiredWorker () {
        axios.put(edit_hired_worker_expenses_api_url(expensesId), {
            summa: editSumma,
            date: editDate,
            comment: editComment, 
            hired_worker_id: props.workerId,
            currency: editCurrency,
            currency_rate: editCurrencyRate,
        }, {headers})
        .then((res) => {
            setEditCost(false);
            axios.get(hired_worker_expenses_api_url(props.workerId), {headers})
             .then((res) => {
                 console.log(res.data.data);
                 setExpenses(res.data.data);
                 setDate("");
                 setComment("");
                 setSumma(0);
                 setCurrency('sum');
                 setCurrencyRate(1);
            })
        })
    }

  return (
    <Stack sx={{
        position: "fixed",
        width: '100%',
        top: 0,
        left:0,
        zIndex: '99999', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center", 
        backgroundColor: '#000000c4'}}>
        <Paper elevation={3} sx={{width: '90%', overflowY: 'scroll', height: '600px', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},  position: 'relative'}}>
            <Button color='danger' onClick={() => props.closeModal()} sx={{position: 'absolute', right: '10px', top: '10px'}}><CloseIcon/></Button>
            <Grid container p={4} spacing={3}>             
                <Grid item xl={6} md={6} sm={12} xs={12} sx={{overflowY: 'scroll', height: '400px', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                    <Grid container sx={{ minWidth: '500px', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}> 
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12} md={12} sm={12} xs={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1} md={1} sm={1} xs={1} fontWeight={600}>Т/р</Grid>
                                <Grid item xl={2} md={2} sm={2} xs={2} fontWeight={600}>
                                    Сана:
                                </Grid>
                                <Grid item xl={2} md={2} sm={2} xs={2} fontWeight={600}>
                                    Сумма:
                                </Grid>
                                <Grid item xl={2} md={2} sm={2} xs={2} fontWeight={600}>
                                    Валюта:
                                </Grid>
                                <Grid item xl={1} md={1} sm={1} xs={1} fontWeight={600}>
                                    Kурси:
                                </Grid>
                                <Grid item xl={2} md={2} sm={2} xs={2} fontWeight={600}>
                                    Изоҳ:
                                </Grid>
                                <Grid item xl={2} md={2} sm={2} xs={2} fontWeight={600}>
                                    Бошқарув:
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            expenses.map((item, index) => {
                                return (
                                    <Grid key={index + 1} item mt={2} fontSize='13px'  borderBottom='solid 2px #ed744466' xl={12} md={12} sm={12} xs={12}>
                                        <Grid container textAlign='center'>
                                            <Grid item xl={1} md={1} sm={1} xs={1}>{index + 1}</Grid>
                                            <Grid item xl={2} md={2} sm={2} xs={2}>
                                                {item.date}
                                            </Grid>
                                            <Grid item xl={2} md={2} sm={2} xs={2}>
                                                {currencyFormat(item.amount)} сўм
                                            </Grid>
                                            <Grid item xl={2} md={2} sm={2} xs={2}>{item.currency === 'sum' ? "Cўм": "$"}</Grid>
                                            <Grid item xl={1} md={1} sm={1} xs={1}>{item.currency_rate} сўм</Grid>
                                            <Grid item xl={2} md={2} sm={2} xs={2}>
                                                {item.comment}
                                            </Grid>
                                            <Grid item xl={2} md={2} sm={2} xs={2} display='flex' alignItems='center' justifyContent='center'>
                                                <Stack direction="row" spacing={1} mt='-7px'>
                                                    <IconButton onClick={() => editClickButton(item.id)} aria-label="delete">
                                                        <EditIcon color='warning' />
                                                    </IconButton>
                                                    <IconButton onClick={() => deleteExpenses(item.id)} aria-label="delete">
                                                        <DeleteIcon color='danger' />
                                                    </IconButton>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid> 
                {
                    editCost ? <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Typography variant='h6' fontWeight={700}>Илҳом Фармонов</Typography>
                    <Typography mt={2} variant='h6'>Харажат ни таҳрирлаш</Typography>
                    <Grid container spacing={3}>
                        <Grid item xl={6} md={12} sm={12} xs={12}>
                            <FormControl fullWidth>
                                <Typography mt={2}>Берган санаси:</Typography>
                                <input value={editDate} onChange={(e) => setEditDate(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="date" name="" id="" />
                            </FormControl>
                            <FormControl fullWidth>
                                <Typography mt={2}>Валюта:</Typography>
                                <select style={{height: '40px', marginTop: '10px'}} value={currency} onChange={(e) => setCurrency(e.target.value)} name="" id="">
                                    <option value="dollar">Usd</option>
                                    <option value="sum">Сўм</option>
                                </select>
                            </FormControl>
                        </Grid>
                        <Grid item xl={6} md={12} sm={12} xs={12}>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Суммаси: ({currency})</Typography>
                                <input value={editSumma} onChange={(e) => setEditSumma(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="number" name="" id="" />
                            </FormControl>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Валюта курси (сўм):</Typography>
                                <input value={currencyRate} onChange={(e) => setCurrencyRate(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="number" name="" id="" />
                            </FormControl>
                        </Grid>
                        <Grid item xl={12} md={12} sm={12} xs={12}>
                            <FormControl  fullWidth>
                                <Typography mb={2}>Изоҳ:</Typography>
                                <textarea value={editComment} onChange={(e) => setEditComment(e.target.value)} name="" id="" cols="30" rows="7"></textarea>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button onClick={editHiredWorker} sx={{mt: 2}} variant='contained' color='warning'>Tahrirlash</Button>
                    <Button onClick={() => setEditCost(false)} sx={{mt: 2, ml: 2}} variant='contained' color='success'><ArrowBackIcon /></Button>
                </Grid> :  <Grid item xl={6} md={6} sm={12} xs={12}>
                    <Typography variant='h6' fontWeight={700}>Илҳом Фармонов</Typography>
                    <Typography mt={2} variant='h6'>Харажат қўшиш</Typography>
                    <Grid container spacing={3}>
                        <Grid item xl={6} md={12} sm={12} xs={12}>
                            <FormControl fullWidth>
                                <Typography mt={2}>Берган санаси:</Typography>
                                <input value={date} onChange={(e) => setDate(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="date" name="" id="" />
                            </FormControl>
                            <FormControl fullWidth>
                                <Typography mt={2}>Валюта:</Typography>
                                <select style={{height: '40px', marginTop: '10px'}} value={currency} onChange={(e) => setCurrency(e.target.value)} name="" id="">
                                    <option value="dollar">Usd</option>
                                    <option value="sum">Сўм</option>
                                </select>
                            </FormControl>
                        </Grid>
                        <Grid item xl={6} md={12} sm={12} xs={12}>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Суммаси: ({currency})</Typography>
                                <input value={summa} onChange={(e) => setSumma(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="number" name="" id="" />
                            </FormControl>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Валюта курси (сўм):</Typography>
                                <input value={currencyRate} onChange={(e) => setCurrencyRate(e.target.value)} style={{height: '40px', marginTop: '10px'}} type="number" name="" id="" />
                            </FormControl>
                        </Grid>
                        <Grid item xl={12} md={12} sm={12} xs={12}>
                            <FormControl  fullWidth>
                                <Typography mb={2}>Изоҳ:</Typography>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" cols="30" rows="7"></textarea>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button onClick={createHiredWorkerExpenses} sx={{mt: 2}} variant='contained' color='warning'>Қўшиш</Button>
                    <a href={`${base_url}/api/hired-workers/export/${props.workerId}`} download={`${base_url}/api/hired-workers/export/${props.workerId}`}><Button sx={{mt: 2, ml: 2}} variant='contained' color='success'>Expert</Button></a>
                </Grid>
                }                   
            </Grid>
        </Paper>
    </Stack>
  )
}

export default AddHiredCost