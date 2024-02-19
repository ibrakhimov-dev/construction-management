import { Stack, Grid, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { base_url, object_api_url } from '../API/baseURL';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Objects() {
    const navigate = useNavigate();
    const [object, setObject] = useState([]);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(object_api_url(), {headers})
        .then((res) => {
            console.log(res.data.data)
            setObject(res.data.data);
        })
    }, [])
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Obyektlar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    {
                        object.map((item, index) => {
                            return (
                                <Grid key={index + 1} item xl={3} md={6} sm={6} xs={12}>
                                    <Card onClick = {() => navigate("/home/edit-object", {state: {id: item.id}})} sx={{
                                        borderRadius: '20px',
                                        position: 'relative',
                                        border: '3px solid var(--border-base-surface, #FFF)',
                                        background: '#F5F5F5',
                                        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                        padding: '14px',
                                        '&:hover': {
                                        boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                        },
                                    }}>
                                        <img src="https://www.pngall.com/wp-content/uploads/2017/03/Gold-Medal-PNG-Images.png" style={{width: '40px', position: "absolute", top: '5px', right: '5px', zIndex: '111'}} alt="" />
                                        <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                            <img src={item.image_url} style={{width: '100%', height: '100%', objectFit: 'cover' }} alt={item.image_name} />
                                        </CardContent>
                                        <CardContent>
                                            <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>{item.name}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <Card onClick = {() => navigate("/home/create-object")} sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#ed744466',
                            cursor: 'pointer',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0}}>
                                <img src='https://play-lh.googleusercontent.com/qlIDfFiFKSeoawoihQlWv-BtnWrGphURKx3EfrnrqfO5toLDDvERs38E7AMqkX_euA' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Yangi Obyekt qo'shish</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Objects