import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Stack, Typography, FormControl, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function EditDailyExpenses() {
    const navigate = useNavigate();

  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uy xarajatlarni taxrirlash</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} p={2}>
                        <FormControl fullWidth>
                            <Typography>Izoh:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Sana:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Sana" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid xl={6} p={2}>
                        
                    <FormControl fullWidth>
                            <Typography>Summa (so'm):</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl> 
                        <Button onClick={() => navigate('/home/daily-expenses')} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Tahrirlash
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditDailyExpenses;