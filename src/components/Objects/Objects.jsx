import { Stack, Grid, Typography, Card, CardContent, MenuItem, Button, Select, FormControl } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { base_url, object_api_url } from '../API/baseURL';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

function Objects() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("all");
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
            if (status === 'active') {
                const filterActive = res.data.data.filter((item) => {
                    return item.state === "active"
                })
                setObject(filterActive);
            } else if (status === 'finished') {
                const filterFineshed = res.data.data.filter((item) => {
                    return item.state === "finished"
                })
                setObject(filterFineshed);
            } else {
                setObject(res.data.data);
            }
        })
    }, [status])
    
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Обектлар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container p={3} spacing={2}>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Объект статуси:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={status}
                                onChange={(e) => setStatus(e.target.value) }
                            >
                                <MenuItem value='all'>Барчаси</MenuItem>
                                <MenuItem value='active'>Тугалланмаган</MenuItem>
                                <MenuItem value='finished'>Тугалланган</MenuItem>
                            </Select>
                        </FormControl> 
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick = {() => navigate("/admin/create-object")} sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Объект қўшиш
                        </Button> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    {
                        object.map((item, index) => {
                            return (
                                <Grid key={index + 1}  item xl={3} md={4} sm={4} xs={6}>
                                    <Card onClick = {() => navigate("/admin/edit-object", {state: {id: item.id}})} sx={{
                                        borderRadius: '20px',
                                        height: {xl: '300px', md: '250px', sm: '250px', xs: '200px'},
                                        position: 'relative',
                                        border: '3px solid var(--border-base-surface, #FFF)',
                                        background: '#F5F5F5',
                                        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                        padding: '14px',
                                        '&:hover': {
                                        boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                        },
                                    }}>
                                        <img src={`${item.state === 'finished' ? 'https://www.pngall.com/wp-content/uploads/2017/03/Gold-Medal-PNG-Images.png' :
                                        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-hourglass.svg/2048px-Circle-icons-hourglass.svg.png'}`} style={{width: '40px', position: "absolute", top: '5px', right: '5px', zIndex: '111'}} alt="" />
                                        <CardContent sx={{height: {xl: '200px', md: '150px', sm: '150px', xs: '100px'}, padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                            <img src={item.image_url} style={{width: '100%', height: '100%', objectFit: 'cover' }} alt={item.image_name} />
                                        </CardContent>
                                        <CardContent>
                                            <Typography pt={1} fontWeight={600} fontSize={{xl: '14px', md: '12px', sm: '13px', xs: '12px'}} textAlign='center'>{item.name}</Typography>
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

export default Objects