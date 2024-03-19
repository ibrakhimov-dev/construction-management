import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Typography, IconButton, Stack, Select, FormControl, MenuItem, Button } from '@mui/material';
import { base_url, all_dayoff_api_url, create_dayoff_api_url, delete_dayoff_api_url } from '../API/baseURL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { succesAlert, errorAlert, deleteAlert, Alert } from '../Alert/Alert';

function DayOff() {
    const navigate = useNavigate()
    const [day, setDay] = useState('1');
    const [date, setDate] = useState('');
    const [dayData, SetDayData] = useState([]);
    const token = localStorage.getItem('accessToken');
    const workerId = localStorage.getItem('workerId');
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

    useEffect (() => {
      axios.get(all_dayoff_api_url(), {
        params: {
            worker_id: workerId,
        },
        headers: headers
    }).then((res) => {
        SetDayData(res.data.data)
    }).catch((err) => {
        if (err.response.data.message === 'Unauthenticated.'){
            navigate('/login')
          }
    }) 
    }, [])

    function createDayOff () {
        axios.post(create_dayoff_api_url(), {
            "worker_id": +workerId,
            "date": `${date.$y}-${correctDate(date.$M + 1)}-${date.$D}`,
            "quantity": +day
        }, {headers}).then((res) => {
            succesAlert();
            setDate("");
            setDay('1');
            axios.get(all_dayoff_api_url(), {
                params: {
                    worker_id: workerId,
                },
                headers: headers
            }).then((res) => {
                SetDayData(res.data.data)
            }).catch((err) => {
                errorAlert()
            })
        }).catch((err) => {
            errorAlert()
        })
    }

    function deleteDayOff (id) {
        axios.delete(delete_dayoff_api_url(id), {headers})
        .then((res) => {
            deleteAlert();
            axios.get(all_dayoff_api_url(), {
                params: {
                    worker_id: workerId,
                },
                headers: headers
            }).then((res) => {
                SetDayData(res.data.data)
            }).catch((err) => {
                errorAlert()
            }) 
        }).catch((err) => {
            errorAlert()
        })
    }

  return (
    <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container padding={3} spacing={2}>
                    <Grid item xl={4} md={4} sm={4} xs={12}>
                    <FormControl  fullWidth>
                            <Typography>Қанча вақт дам олгани:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={day}
                                onChange={(e) => setDay(e.target.value) }
                            >
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='0.5'>0.5</MenuItem>
                            </Select>
                        </FormControl> 
                    </Grid>
                    <Grid item xl={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <Typography mt='-8px'>Дам олган куни:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xl={4} md={4} sm={4} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={createDayOff} sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            қўшиш
                        </Button> 
                    </Grid>
                </Grid>
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "flex", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={1} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={4} md={4} sm={12} xs={12}p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Дам олган куни:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Қанча вақт дам олгани:</Grid>
                    <Grid item xl={4} md={4} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Delete:</Grid>
                </Grid>
                            {
                                dayData.map((item, index) => {
                                    return (
                                        <Grid container p={3} mt={-1} height={{xl: '60px', md: '60px', sm: "auto", xs: "auto"}} key={index + 1} borderBottom='solid 2px #ed744466' justifyContent='center' alignItems="center" textAlign={{xl: 'center', md: "center", sm: 'left', xs: 'left'}}>                    
                                            <Grid item xl={1} md={1} sm={12} xs={12}>
                                                <Typography pt={2} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р:</Typography>
                                                {index + 1}
                                            </Grid>
                                            <Grid item xl={4} md={4} sm={12} xs={12}>
                                                <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Дам олган куни:</Typography>
                                                {item.date}
                                            </Grid>
                                            <Grid item xl={3} md={3} sm={12} xs={12}>
                                                <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Қанча вақт дам олгани:</Typography>
                                                <span style={{fontWeight: 'bold'}}>{item.quantity}</span> kun dam oldi
                                            </Grid>
                                            <Grid item xl={4} md={4} sm={12} xs={12}>
                                                <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Delete:</Typography>
                                                <Stack direction="row" width='100%' display='flex' justifyContent='center'  spacing={1} mt='-7px'>
                                                    <IconButton onClick={() => deleteDayOff(item.id)} aria-label="delete">
                                                        <DeleteIcon color='danger' />
                                                    </IconButton>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
            </Grid>
            <Alert />
        </Grid>
  )
}

export default DayOff