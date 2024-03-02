import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function EditWorker() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid p={3} item xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}} >
                <Grid container>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Лавозими:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Lavozimi 1</MenuItem>
                                <MenuItem value="O'tqazma">Lavozimi 2</MenuItem>
                            </Select>
                        </FormControl> 
                        <FormControl fullWidth>
                            <Typography mt={2}>Логин:</Typography>
                            <TextField sx={{mt: 1}} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Парол:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>               
                    </Grid>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Кунлик Иш Ҳақи:</Typography>
                            <TextField id="outlined-basic" color='warning' type='number' variant="outlined" />
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
                        <FormControl fullWidth>
                            <Typography mt={2}>Телофон рақами:</Typography>
                            <TextField sx={{mt: 1}} id="outlined-basic" label="+998" color='warning' type='number' variant="outlined" />
                        </FormControl>
                        <Button onClick={() => navigate('/home/worker')} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
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