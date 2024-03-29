import { Stack, Grid, Typography, Card, CardContent, Fab, Button } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import { base_url, home_sales_api_url } from '../API/baseURL';
import axios from 'axios';

function HomeSales() {
    const navigate = useNavigate();
    const [home, setHome] = useState([]);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(home_sales_api_url(), {headers})
        .then((res) => {
            setHome(res.data.data)
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }


  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Уй Савдоси</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container>
                    <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick = {() => navigate("/admin/create-home-sales")} sx={{height: '55px', textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Уй қўшиш
                        </Button> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    {
                        home.map((item, index) => {
                            return (
                                <Grid key={index + 1} item xl={4} md={6} sm={6} xs={12}>
                                    <Card onClick = {() => navigate("/admin/detail-home-sales", {state: {id: item.id}})} sx={{
                                        borderRadius: '20px',
                                        position: 'relative',
                                        height: '480px',
                                        border: '3px solid var(--border-base-surface, #FFF)',
                                        background: '#F5F5F5',
                                        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                        padding: '14px',
                                        '&:hover': {
                                        boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                        },
                                    }}>
                                        <CardContent sx={{height: {xl: '250px', md: '250px', sm: '250px', xs: '250px'}, padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                            <img src={item.image_url} style={{width: '100%', height: '100%', objectFit: 'cover' }} alt={item.name}/>
                                        </CardContent>
                                        <CardContent>
                                            <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>{item.name}</Typography>
                                        </CardContent>
                                        <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                            <Fab
                                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', width: '100%', zIndex: 2, }}
                                            variant="extended"
                                            size="small"
                                            aria-label="date"
                                            >
                                                <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                                {item.address}
                                            </Fab>
                                            <Fab
                                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', width: '100%', zIndex: 2, }}
                                            variant="extended"
                                            size="small"
                                            aria-label="date"
                                            >
                                                <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                                {currencyFormat(item.total_amount)} сўм
                                            </Fab>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default HomeSales;