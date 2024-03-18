import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Typography, IconButton, Stack,  FormControl, Button, TextField, Select, MenuItem } from '@mui/material';
import { base_url, all_worker_avans_api_url, create_worker_avans_api_url, delete_worker_avans_api_url } from '../API/baseURL';
import axios from 'axios';

function Avans() {
    const [money, setMoney] = useState(0);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState("");
    const [avansData, setAvansData] = useState([]);
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
        axios.get(all_worker_avans_api_url(), {
          params: {
              worker_id: workerId,
          },
          headers: headers
      }).then((res) => {
          setAvansData(res.data.data)
      }) 
      }, [])

      function createAvans () {
        axios.post(create_worker_avans_api_url(), {
            "worker_id": workerId,
            "date": `${date.$y}-${correctDate(date.$M + 1)}-${date.$D}`,
            "amount": money,
            "type": category
        }, {headers}).then((res) => {
            setDate("");
            setMoney('1');
            setCategory("");
            axios.get(all_worker_avans_api_url(), {
                params: {
                    worker_id: workerId,
                },
                headers: headers
            }).then((res) => {
                setAvansData(res.data.data)
            })  
        })
    }

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = ("" + num).length; i >= 0 ; i = i - 3){
            arrNum.unshift(("" + num).substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteAvans (id) {
        axios.delete(delete_worker_avans_api_url(id), {headers})
        .then((res) => {
            axios.get(all_worker_avans_api_url(), {
                params: {
                    worker_id: workerId,
                },
                headers: headers
            }).then((res) => {
                setAvansData(res.data.data)
            })  
        })
    }

  return (
    <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container padding={3} spacing={2}>
                    <Grid item xl={3} md={3} sm={3} xs={12}>
                    <FormControl  fullWidth>
                            <Typography>Қанча аванс олгани:</Typography>
                            <TextField autoComplete='off' type='number' value={money} onChange={(e) => setMoney(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl> 
                    </Grid>
                    <Grid item xl={3} md={3} sm={3} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Иш ҳақи тури:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={category}
                                onChange={(e) => setCategory(e.target.value) }
                            >
                                <MenuItem value="advance">Аванс</MenuItem>
                                <MenuItem value="salary">Ойлик</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={3} sm={3} xs={12}>
                        <FormControl fullWidth>
                            <Typography mt='-8px'>Аванс олган куни:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={3} sm={3} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={createAvans} sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            қўшиш
                        </Button> 
                    </Grid>
                </Grid>
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "flex", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={1} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Қанча аванс олгани:</Grid>
                    <Grid item xl={2} md={2} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Аванс олган куни:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Иш ҳақи тури:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Delete:</Grid>
                </Grid>
                    {
                        avansData.map((item, index) => {
                            return (
                                <Grid key={index + 1} container mt={-1} p={3} height={{xl: '60px', md: '60px', sm: "auto", xs: "auto"}} borderBottom='solid 2px #ed744466' alignItems="center" textAlign={{xl: 'center', md: "center", sm: 'left', xs: 'left'}}>                    
                                <Grid item xl={1} md={1} sm={12} xs={12}>
                                    <Typography pt={2} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р:</Typography>
                                    {index + 1}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Қанча аванс олгани:</Typography>
                                    <span style={{fontWeight: 'bold'}}>{currencyFormat(item.amount)}</span> сўм
                                </Grid>
                                <Grid item xl={2} md={2} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Аванс олган куни:</Typography>
                                    {item.date}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Иш ҳақи тури:</Typography>
                                    {item.type === 'salary' ? "Ойлик" : "Аванс"}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Delete:</Typography>
                                    <Stack direction="row" width='100%' display='flex' justifyContent='center'  spacing={1} mt='-7px'>
                                        <IconButton onClick={() => deleteAvans(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                            )
                        })
                    }
            </Grid>
        </Grid>
  )
}

export default Avans