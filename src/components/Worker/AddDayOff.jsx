import { Paper, Stack, Grid, Typography, FormControl, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

function AddDayOff(props) {
    function clickDay() {
        props.closeModal()
    }

  return (
    <Stack sx={{
        position: "fixed",
        width: '100%',
        top: 0,
        left:0,
        zIndex: '99999', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center", 
        backgroundColor: '#000000c4'}}>
        <Paper elevation={3} sx={{width: '80%', position: 'relative'}}>
            <Button color='danger' onClick={() => props.closeModal()} sx={{position: 'absolute', right: '10px', top: '10px'}}><CloseIcon/></Button>
            <Grid container p={4} spacing={3}>             
                <Grid item xl={6} sx={{overflowY: 'scroll', height: '240px'}}>
                    <Grid container > 
                        <Grid item mt={2} textAlign='center' borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container>
                                <Grid item xl={1} fontWeight={600}>T/r</Grid>
                                <Grid item xl={4} fontWeight={600}>
                                    Dam olgan kuni
                                </Grid>
                                <Grid item xl={5} fontWeight={600}>
                                    Qancha vaqt dam olgani
                                </Grid>
                                <Grid item xl={2} fontWeight={600}>Boshqaruv:</Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={4}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={5}>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={2} display='flex' justifyContent='center' alignItems='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={4}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={5}>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={2} display='flex' justifyContent='center' alignItems='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={4}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={5}>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={2} display='flex' justifyContent='center' alignItems='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={4}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={5}>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={2} display='flex' justifyContent='center' alignItems='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={4}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={5}>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={2} display='flex' justifyContent='center' alignItems='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
                <Grid item xl={6}>
                    <Typography variant='h6' fontWeight={700}>Ilhom Farmonov</Typography>
                    <Typography mt={2} variant='h6'>Dam olish kuni qo'shish</Typography>
                    <Grid container spacing={3}>
                        <Grid item xl={6}>
                            <FormControl fullWidth>
                                <Typography mt={2}>Dam olish kuni:</Typography>
                                <input style={{height: '40px', marginTop: '10px'}} type="date" name="" id="" />
                            </FormControl>
                        </Grid>
                        <Grid item xl={6}>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Qancha vaqt dam olgani (kun):</Typography>
                                <select style={{height: '40px', marginTop: '10px'}} name="" id="">
                                    <option value="0.5">0.5</option>
                                    <option value="1">1</option>
                                </select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button onClick={clickDay} sx={{mt: 2}} variant='contained' color='warning'>Qo'shish</Button>
                </Grid>             
            </Grid>
        </Paper>
    </Stack>
  )
}

export default AddDayOff