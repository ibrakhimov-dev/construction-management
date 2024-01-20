import { Stack, Grid, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Objects() {
    const navigate = useNavigate();
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Obyektlar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12}>
                <Grid container spacing={3}>
                    <Grid item xl={3}>
                        <Card onClick = {() => navigate("/home/edit-object")} sx={{
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
                                <img src='https://frankfurt.apollo.olxcdn.com/v1/files/5j3yxowa09c61-UZ/image;s=1280x853' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Samarqand Avinyu</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
                        <Card  sx={{
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-hourglass.svg/768px-Circle-icons-hourglass.svg.png" style={{width: '40px', position: "absolute", top: '5px', right: '5px', zIndex: '111'}} alt="" />
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://stroyka.uz/upload/iblock/e76/e760511844f10fb8b1e642dc6f716a72.png' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>GC - Tower</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
                        <Card  sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://domtut.uz/resources/uploads/property/orsquozbegim/main_8.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Jiloy Kompleks</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
                        <Card  sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://domtut.uz/resources/uploads/property/koh-ota/main_12.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Koh Ota City</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
                        <Card  sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://domtut.uz/resources/uploads/thumbs/koh-ota/main_16.webp?r=1675668328' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Koh Ota City</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
                        <Card  sx={{
                            borderRadius: '20px',
                            border: '3px solid var(--border-base-surface, #FFF)',
                            background: '#F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                            padding: '14px',
                            '&:hover': {
                            boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                            },
                        }}>
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://frankfurt.apollo.olxcdn.com/v1/files/p65ipu97i9pr3-UZ/image;s=2000x1333' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Yangibozor</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3}>
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