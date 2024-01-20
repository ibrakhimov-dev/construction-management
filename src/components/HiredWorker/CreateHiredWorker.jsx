import React from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function EditHiredWorker() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const navigate = useNavigate();
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Yollanma ishchilar qo'shish</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} p={2}>
                        <FormControl fullWidth>
                            <Typography>Ism Familiya:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Obyekt:</Typography>
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
                            <Typography mt={2}>Telofon raqami:</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} p={2}>
                        <FormControl fullWidth>
                            <Typography>Ish Haqi:</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Izoh:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                            <Button onClick={() => navigate('/home/hired-worker')} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Ishchi qo'shish
                            </Button>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditHiredWorker