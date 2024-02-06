import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Grid, Stack, Typography, FormControl, Autocomplete, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { MuiFileInput } from 'mui-file-input';

function CreateAgreement() {
    const navigate = useNavigate();
    const [options, setOptions] = useState([]); 
    const [value, setValue] = React.useState(options[0]);
    const [summ, setSumm] = useState("");
    const [inputValue, setInputValue] = React.useState('');
    const [summObj, setSummObj] = useState({
        qavat: '',
        summa: '',
    })
    const [summDate, setSummDate] = useState([{
        qavat: '',
        summa: '',
    }])
    const length = summDate.length;
    console.log(value, inputValue);
    console.log(summ)

    console.log(summDate)

    if (summDate[length - 1].qavat !== "" && summDate[length - 1].summa !== ""){
        setSummObj({
            qavat: inputValue,
            summa: summ,
        })
        summDate.push(summObj);
        setSummDate(summDate);
    }


    useEffect(() => {
        const options = ['1 - qavat', '2 - qavat'];
        setOptions(options);
    }, [])

    const handleChange = (newValue) => {
        setValue(newValue)
    }
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Kelishuv qo'shish</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Obyekt Nomi:</Typography>
                            <TextField id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Obyekt rasmini yuklang:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                         
                                     
                    </Grid>
                </Grid>
                {
                    summDate.map((item) => {
                        return (
                            <Grid container>
                                <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                                <FormControl  fullWidth>
                                        <Typography>Qavat</Typography>
                                        <Autocomplete
                                            value={item.qavat}
                                            onChange={(event, newValue) => {
                                            setSummObj({qavat: newValue});
                                            }}
                                            inputValue={inputValue}
                                            onInputChange={(event, newInputValue) => {
                                            setInputValue(newInputValue);
                                            }}
                                            id="free-solo-demo"
                                            freeSolo
                                            options={options}
                                            sx={{ width: '100%' }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </FormControl> 
                                    
                                </Grid>
                                <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                                    <FormControl fullWidth>
                                        <Typography>Summasi (metr kv):</Typography>
                                        <TextField value={summ} onChange={(e) => setSumm(e.target.value)} type='number' id="outlined-basic" color='warning' label="So'm" variant="outlined" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        )
                    })
                }
                <Stack>
                    <Button  onClick={() => navigate('/home/agreement')} sx={{height: '55px', mt: 5, width: '250px'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                        Kelishuv Qo'shish
                    </Button>  
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default CreateAgreement