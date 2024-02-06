import { Stack, Grid, Typography, Card, CardContent, Fab } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Agreement() {
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Kelishuvlar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid xl={12} md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <Card onClick = {() => navigate("/home/detail-agreement")} sx={{
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
                            <img src="https://cdn-icons-png.flaticon.com/512/748/748504.png" style={{width: '40px', position: "absolute", top: '5px', right: '5px', zIndex: '111'}} alt="" />
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://frankfurt.apollo.olxcdn.com/v1/files/5j3yxowa09c61-UZ/image;s=1280x853' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Samarqand Avinyu</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-hourglass.svg/768px-Circle-icons-hourglass.svg.png" style={{width: '40px', position: "absolute", top: '5px', right: '5px', zIndex: '111'}} alt="" />
                            <CardContent sx={{height: '250px', padding: 0, overflow: 'hidden', '&:hover img': {transform: "scale(1.5)", transition: '0.5s'}}}>
                                <img src='https://stroyka.uz/upload/iblock/e76/e760511844f10fb8b1e642dc6f716a72.png' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>GC - Tower</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                                <img src='https://domtut.uz/resources/uploads/property/orsquozbegim/main_8.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Jiloy Kompleks</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                                <img src='https://domtut.uz/resources/uploads/property/koh-ota/main_12.jpg' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Koh Ota City</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                                <img src='https://domtut.uz/resources/uploads/thumbs/koh-ota/main_16.webp?r=1675668328' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Koh Ota City</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                                <img src='https://frankfurt.apollo.olxcdn.com/v1/files/p65ipu97i9pr3-UZ/image;s=2000x1333' style={{width: '100%', height: '100%', objectFit: 'cover' }} alt='birnima'/>
                            </CardContent>
                            <CardContent>
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Yangibozor</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
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
                        <Card onClick = {() => navigate("/home/create-agreement")} sx={{
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
                                <Typography pt={1} fontWeight={600} textAlign='center' variant='h6'>Yangi Kelishuv qo'shish</Typography>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', p: 0, m: 0}}>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AccessTimeIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    05.02.2024
                                </Fab>
                                <Fab
                                sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none' }}
                                variant="extended"
                                size="small"
                                aria-label="date"
                                >
                                    <AttachMoneyIcon sx={{ mr: 1 }} color="warning" fontSize="small" />
                                    0 so'm
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

export default Agreement