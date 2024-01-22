import React from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';

function CreateEquipment() {
    const [paymentType, setPaymentType] = useState('Naxt')
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null)
    const handleChange = (newValue) => {
            setValue(newValue)
        }
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uskuna Qo'shish</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} p={2}>
                        <FormControl fullWidth>
                            <Typography>Uskuna Nomi:</Typography>
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
                            <Typography mt={2}>Narxi:</Typography>
                            <TextField id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Holati:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Ishlaydi</MenuItem>
                                <MenuItem value="O'tqazma">Ishlamaydi</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Obyekt rasmini yuklang:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                            <Button onClick={() => navigate('/home/equipment')} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Uskuna qo'shish
                            </Button>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default CreateEquipment;