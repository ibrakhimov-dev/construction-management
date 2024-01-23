import { Paper, Stack, Grid, Typography, FormControl, Button,  IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

function AddHiredCost(props) {
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
                <Grid item xl={6} sx={{overflowY: 'scroll', height: '400px'}}>
                    <Grid container > 
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1} fontWeight={600}>T/r</Grid>
                                <Grid item xl={2} fontWeight={600}>
                                    Sana:
                                </Grid>
                                <Grid item xl={2} fontWeight={600}>
                                    Summa:
                                </Grid>
                                <Grid item xl={5} fontWeight={600}>
                                    Izoh:
                                </Grid>
                                <Grid item xl={2} fontWeight={600}>
                                    Boshqaruv:
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item mt={2} borderBottom='solid 2px #ed744466' xl={12}>
                            <Grid container textAlign='center'>
                                <Grid item xl={1}>1</Grid>
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                                <Grid item xl={2}>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={2}>
                                    3 mln so'm
                                </Grid>
                                <Grid item xl={5}>
                                    Lorem ipsum dolor sit amet.
                                </Grid>
                                <Grid item xl={2} display='flex' alignItems='center' justifyContent='center'>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
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
                    <Typography mt={2} variant='h6'>Xarajat qo'shish</Typography>
                    <Grid container spacing={3}>
                        <Grid item xl={6}>
                            <FormControl fullWidth>
                                <Typography mt={2}>Bergan sanasi:</Typography>
                                <input style={{height: '40px', marginTop: '10px'}} type="date" name="" id="" />
                            </FormControl>
                        </Grid>
                        <Grid item xl={6}>
                            <FormControl  fullWidth>
                                <Typography mt={2}>Summasi:</Typography>
                                <input style={{height: '40px', marginTop: '10px'}} type="number" name="" id="" />
                            </FormControl>
                        </Grid>
                        <Grid item xl={12}>
                            <FormControl  fullWidth>
                                <Typography mb={2}>Izoh:</Typography>
                                <textarea name="" id="" cols="30" rows="7"></textarea>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button onClick={clickDay} sx={{mt: 2}} variant='contained' color='warning'>Qo'shish</Button>
                    <Button onClick={clickDay} sx={{mt: 2, ml: 2}} variant='contained' color='success'>Expert</Button>
                </Grid>             
            </Grid>
        </Paper>
    </Stack>
  )
}

export default AddHiredCost