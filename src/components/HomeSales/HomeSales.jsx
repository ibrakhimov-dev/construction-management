import { Stack, Grid, Typography, Card, CardContent, Fab } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeSales() {
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uy Savdosi</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <Card onClick = {() => navigate("/home/detail-home-sales")} sx={{
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
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/482153669.jpg?k=9229b6c1510061b65bd0d23884042bd26e0662a423ce09f73f11241aaf72b2c3&o=&hp=1' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Hovli</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    Toshkent shaxar Yunusobod
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <MapIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    350 m<sup>2</sup>
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    300 mln so'm
                                </Fab>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
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
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://krots.top/uploads/posts/2021-12/1639390744_20-krot-info-p-arkhitektura-uzbekistan-ui-krasivie-foto-20.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Dacha</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    Toshkent shaxar Yunusobod
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <MapIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    350 m<sup>2</sup>
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    300 mln so'm
                                </Fab>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
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
                                <img src='https://domtut.uz/resources/uploads/post/kak-kupit-chastnyy-dom-v-tashkente-podrobnoe-rukovodstvo.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Qishloqdagi Uy</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    Toshkent shaxar Yunusobod
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <MapIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    350 m<sup>2</sup>
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    300 mln so'm
                                </Fab>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
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
                                <img src='https://abrakadabra.fun/uploads/posts/2022-12/1671788082_1-abrakadabra-fun-p-khovli-landshaft-1.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Villa</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    Toshkent shaxar Yunusobod 
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <MapIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    350 m<sup>2</sup>
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    300 mln so'm
                                </Fab>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <Card onClick = {() => navigate("/home/create-home-sales")} sx={{
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
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Uy qo'shish</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <LocationOnIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <MapIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    0 m<sup>2</sup>
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    0 mln so'm
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