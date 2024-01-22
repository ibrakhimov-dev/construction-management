import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function EditWorker() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const navigate = useNavigate();
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Xarajatlar (Umumiy Malumot)</Typography>
            </Grid>
        </Grid>
        <Grid p={3} container>
            <Grid p={3} item xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid item xl={6} display='flex' alignItems='center'>
                        <Typography variant='h6'>Ish boshqaruvchi: Ilhom Farmonov</Typography>
                    </Grid>
                    <Grid item xl={6} display='flex' justifyContent='flex-end'>
                        <Typography variant='subtitle1' fontWeight={600}>10.01.2024 yildan beri jami Ish haqi: 1 200 000 mln so'm</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} >
                <Grid container>
                    <Grid xl={6} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Lavozimi:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Lavozim 1</MenuItem>
                                <MenuItem value="O'tqazma">Lavozim 2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Login:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Parol:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl> 
                        <FormControl fullWidth>
                            <Typography mt={2}>Ish boshlagan sanasi:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Sana" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>              
                    </Grid>
                    <Grid xl={6} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Obyekt:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Obyekt</MenuItem>
                                <MenuItem value="O'tqazma">Obyekt</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Telefon Raqami:</Typography>
                            <TextField color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Kunlik ish haqi:</Typography>
                            <TextField color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Avans:</Typography>
                            <TextField color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <Button onClick={() => navigate('/home/worker')} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Tahrirlash
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditWorker;