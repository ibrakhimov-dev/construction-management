import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { MuiFileInput } from 'mui-file-input';

function EditObject() {
    const [paymentType, setPaymentType] = useState('Naxt');
    const [value, setValue] = React.useState(null)
    const navigate = useNavigate();

    const handleChange = (newValue) => {
        setValue(newValue)
    }
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Obyektni taxrirlash</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} md={12} sm={12} xs={12} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Obyekt Nomi:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Obyekt rasmini yuklang:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        
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
                                <MenuItem value="Naxt">Tugallangan</MenuItem>
                                <MenuItem value="O'tqazma">Tugallanmagan</MenuItem>
                            </Select>
                        </FormControl>  
                        <Button onClick={() => navigate('/home/object')} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Tahrirlash
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditObject;