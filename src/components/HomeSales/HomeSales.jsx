import { Stack, Grid, Typography, Card, CardContent, Fab } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
            console.log(res.data)
            setHome(res.data.data)
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
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    {
                        home.map((item, index) => {
                            return (
                                <Grid key={index + 1} item xl={3} md={6} sm={6} xs={12}>
                                    <Card onClick = {() => navigate("/home/detail-home-sales", {state: {id: item.id}})} sx={{
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
                                        <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
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
                                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', width: '100%' }}
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
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <Card onClick = {() => navigate("/home/create-home-sales")} sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#ed744466',
                            cursor: 'pointer',
                            height: '460px',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0}}>
                                <img src='https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-add.png' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Uy qo'shish</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', width: '100%', zIndex: 2 }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    Уйнингизнинг Қаерда жойлаҳган:
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', width: '100%', zIndex: 2 }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    0 млн сўм
                                </Fab>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default HomeSales;