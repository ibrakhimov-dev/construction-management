import { Stack, Grid, Typography, Pagination, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import DailyExpensesTable from './DailyExpensesTable';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';

function DailyExpenses() {
    const navigate = useNavigate()
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uy Xarajatlar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={12} sm={12} xs={12} display='flex' gap={1} justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} alignItems='center'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='outlined' color='primary'>
                            10 kunlik
                        </Button>
                        <Button  sx={{height: '55px', mt: 1}} size='large' variant='outlined' color='primary'>
                            30 kunlik
                        </Button> 
                    </Grid>
                    <Grid item xl={5} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} flexWrap={{xl: 'nowrap', md: 'wrap', sm: 'wrap', xs: "wrap"}} gap={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Dan (kun)" />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Gacha (kun)" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xl={4} md={12} sm={12} xs={12} display='flex' gap={1} justifyContent={{xl: 'flex-start', md: 'flex-start', sm: "flex-start", xs: 'center' }} flexWrap='wrap' alignItems='center'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button>
                        <Button onClick={() => navigate('/home/create-daily-expenses')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Xarajat qo'shish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <DailyExpensesTable />
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={10} />
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default DailyExpenses