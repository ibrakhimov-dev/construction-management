import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function CreateIncome() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const [currency, setCurrency] = useState("Usd")
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Daromad qo'shish</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={12} sm={12} xs={12} p={2}>
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
                                <MenuItem value="Naxt">Obyekt 1</MenuItem>
                                <MenuItem value="O'tqazma">Obyekt 2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Summa (so'm):</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Izoh:</Typography>
                            <TextField id="outlined-basic" variant="outlined" />
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
                    <Grid xl={6} md={12} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>To'lov Turini:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl  fullWidth >
                            <Typography mt={2}>Valyuta:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Valyuta kursi (so'm):</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <Button onClick={() => navigate('/home/income')} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Daromad qo'shish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default CreateIncome