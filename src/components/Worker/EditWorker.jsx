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
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Харажатлар (Умумий Малумот)</Typography>
            </Grid>
        </Grid>
        <Grid p={3} container>
            <Grid p={3} item xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid item xl={6} display='flex' alignItems='center'>
                        <Typography variant='h6'>Иш бошқарувчи: Илҳом Фармонов</Typography>
                    </Grid>
                    <Grid item xl={6} display='flex' justifyContent='flex-end'>
                        <Typography variant='subtitle1' fontWeight={600}>10.01.2024 йилдан бери жами Иш ҳақи: 1 200 000 млн сўм</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} >
                <Grid container>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Лавозими:</Typography>
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
                            <Typography mt={2}>Логин:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Парол:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl> 
                        <FormControl fullWidth>
                            <Typography mt={2}>Иш бошлаган санаси:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Сана" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>              
                    </Grid>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Обект:</Typography>
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
                            <Typography mt={2}>Телефон Рақами:</Typography>
                            <TextField color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Кунлик иш ҳақи:</Typography>
                            <TextField color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Аванс:</Typography>
                            <TextField sx={{mt: 1}} color='warning' id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <Button onClick={() => navigate('/home/worker')} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Таҳрирлаш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditWorker;