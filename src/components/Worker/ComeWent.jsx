import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid, Typography, IconButton, Stack,  FormControl, Button, Select, MenuItem, Pagination } from '@mui/material';
import { all_worker_account_api_url, base_url, 
    create_worker_account_api_url, 
    edit_worker_account_api_url, 
    delete_worker_account_api_url,
    current_worker_account_api_url } from '../API/baseURL';
import axios from 'axios';
import dayjs from 'dayjs';

function ComeWent() {
    const [date, setDate] = useState('');
    const [finishedDate, setFinishedDate] = useState('');
    const [currentId, setCurrentId] = useState("");
    const [category, setCategory] = useState("");
    const [comeWentData, setComeWentData] = useState([]);
    const [isAgreeEdit, setIsAgreeEdit] = useState(false);
    const token = localStorage.getItem('accessToken');
    const workerId = localStorage.getItem('workerId');
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

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

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = ("" + num).length; i >= 0 ; i = i - 3){
            arrNum.unshift(("" + num).substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    useEffect(() => {
        axios.get(all_worker_account_api_url(), {
            params: {
                worker_id: workerId,
                page: page,
            },
            headers: headers
        }).then((res) => {
            setComeWentData(res.data.data)
            setCountPage(res.data.meta.last_page);
            setPage(res.data.meta.current_page);
            setDefoultPage(res.data.meta.current_page);
        }) 
    }, [page])

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function createWorkerAccount () {
        if (date === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {        
            axios.post(create_worker_account_api_url(), {
                "worker_id": workerId,
                "started_date": `${date.$y}-${correctDate(date.$M + 1)}-${date.$D}`
            }, {headers}).then((res) => {
                setDate("");
                axios.get(all_worker_account_api_url(), {
                    params: {
                        worker_id: workerId,
                    },
                    headers: headers
                }).then((res) => {
                    setComeWentData(res.data.data)
                    setCountPage(res.data.meta.last_page);
                    setPage(res.data.meta.current_page);
                    setDefoultPage(res.data.meta.current_page);
                }) 
            }).catch((err) => {
                alert("Ишчи ишини якунлагани ёқ хали")
            })
        }
    }

    function editAccount (id) {
        setIsAgreeEdit(true);
        setCurrentId(id);
        axios.get(current_worker_account_api_url(id), {headers})
        .then((res) => {
            setCategory(res.data.data.status);
            setFinishedDate(dayjs(res.data.data.finished_date));
        })   
    }

    function edit () {
        if (category === " " || finishedDate === " "){
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.put(edit_worker_account_api_url(currentId), {
                "finished_date": `${finishedDate.$y}-${correctDate(finishedDate.$M + 1)}-${finishedDate.$D}`,
                "status": category
            }, {headers}).then((res) => {
                setIsAgreeEdit(false);
                axios.get(all_worker_account_api_url(), {
                    params: {
                        worker_id: workerId,
                    },
                    headers: headers
                }).then((res) => {
                    setComeWentData(res.data.data)
                    setCountPage(res.data.meta.last_page);
                    setPage(res.data.meta.current_page);
                    setDefoultPage(res.data.meta.current_page);
                }) 
            })
        }
    }


    function deleteAccount(id) {
        axios.delete(delete_worker_account_api_url(id), {headers})
        .then((res) => {
            axios.get(all_worker_account_api_url(), {
                params: {
                    worker_id: workerId,
                },
                headers: headers
            }).then((res) => {
                setComeWentData(res.data.data)
                setCountPage(res.data.meta.last_page);
                setPage(res.data.meta.current_page);
                setDefoultPage(res.data.meta.current_page);
            }) 
        }) 
    }

  return (
    <>
    <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                {
                    isAgreeEdit ? <Grid container padding={3} spacing={2}>
                        <Grid item xl={4} md={4} sm={6} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Статус:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={category}
                                onChange={(e) => setCategory(e.target.value) }
                            >
                                <MenuItem value="working">Ишламоқда</MenuItem>
                                <MenuItem value="payed">Тўланган</MenuItem>
                                <MenuItem value="finished">Тугатган</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <Typography mt='-8px'>Тугатган вақти:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={finishedDate} onChange={(e) => setFinishedDate(e)} label="Сана:" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xl={4} md={4} sm={12} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={edit} sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Тахрирлаш
                        </Button> 
                    </Grid>
                </Grid> : 
                <Grid container padding={3} spacing={2}>
                <Grid item xl={6} md={6} sm={6} xs={12}>
                    <FormControl fullWidth>
                        <Typography mt='-8px'>Иш бошлаган вақти</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xl={6} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                    <Button onClick={createWorkerAccount} sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                        қўшиш
                    </Button> 
                </Grid>
            </Grid>
                }
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "none", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={2} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Бошлаган вақти:</Grid>
                    <Grid item xl={1} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Дам:</Grid>
                    <Grid item xl={1} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Статус:</Grid>
                    <Grid item xl={2} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Кунлик маош:</Grid>
                    <Grid item xl={2} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Жами сумма:</Grid>
                    <Grid item xl={2} md={12} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Тугатган вақти:</Grid>
                    <Grid item xl={1} md={12} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>
                        <Stack direction="row" width='100%' display='flex' justifyContent='center'  spacing={1} mt='-7px'>
                            <IconButton aria-label="delete">
                                <SettingsIcon color='grey' />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
                {
                    comeWentData.map((item, index) => {
                        return (
                            <Grid key={index + 1} container p={3} borderBottom='solid 2px #ed744466' alignItems="center" textAlign={{xl: 'center', md: "left", sm: 'left', xs: 'left'}}>                    
                                <Grid item xl={1} md={12} sm={12} xs={12}>
                                    <Typography pt={2} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р:</Typography>
                                    {index + 1}
                                </Grid>
                                <Grid item xl={2} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Бошлаган вақти:</Typography>
                                    {item.started_date}
                                </Grid>
                                <Grid item xl={1} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Дам:</Typography>
                                    {item.day_offs}
                                </Grid>
                                <Grid item xl={1} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Статус:</Typography>
                                    {item.status === 'working' ? "Ишламоқда" : item.status === 'finished' ? "Тугатган" : "Тўланган" }
                                </Grid>
                                <Grid item xl={2} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Кунлик маош:</Typography>
                                    {currencyFormat(item.salary_rate)} сўм
                                </Grid>
                                <Grid item xl={2} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Жами сумма:</Typography>
                                    {currencyFormat(item.total_amount)} сўм
                                </Grid>
                                <Grid item xl={2} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Тугатган вақти:</Typography>
                                    {item.finished_date}
                                </Grid>
                                <Grid item xl={1} md={12} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "block", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Бошқарув:</Typography>
                                    <Stack direction="row" width='100%' display='flex' justifyContent='flex-start'  spacing={1} mt='-7px'>
                                        <IconButton onClick = {() => editAccount(item.id)} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        {item.status !== 'working' ? <></> : <IconButton onClick = {() => deleteAccount(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>}
                                        
                                    </Stack>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </Grid>
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={countPage} defaultPage={defoultPage} page={page} onChange={handleChange} />
                </Stack>
            </Grid>
        </Grid>
    </>
  )
}

export default ComeWent