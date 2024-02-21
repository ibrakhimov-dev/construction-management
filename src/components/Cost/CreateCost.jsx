import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function CreateCost() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const [currency, setCurrency] = useState("Usd")
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Харажат қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} xm={12} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Cатегорй:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Category 1</MenuItem>
                                <MenuItem value="O'tqazma">Category 2</MenuItem>
                            </Select>
                        </FormControl> 
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
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
                        <FormControl  fullWidth>
                            <Typography mt={2}>Иш Бошқарувчи:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Ish Boshqaruvchi 1</MenuItem>
                                <MenuItem value="O'tqazma">Ish Boshqaruvchi 2</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Сумма (сўм):</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Сана:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Сана" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                        
                        
                    </Grid>
                    <Grid xl={6} xm={12} sm={12} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Тўлов Турини:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Нахт</MenuItem>
                                <MenuItem value="O'tqazma">Ўтқазма</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl  fullWidth >
                            <Typography mt={2}>Валюта:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value="So'm">Сўм</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Валюта курси (сўм):</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Изоҳ:</Typography>
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        
                            <Button onClick={() => navigate('/home/cost')} sx={{height: '55px', mt: 6}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Харажат қўшиш
                            </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default CreateCost;