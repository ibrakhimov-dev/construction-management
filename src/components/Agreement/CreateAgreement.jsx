import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Button, TextField, FormControl, FormHelperText, Typography, Stack, MenuItem, Select } from '@mui/material';
import { useState, useEffect } from 'react';
import { base_url, all_object_api_url, create_contract_api_url } from '../API/baseURL';
import axios from 'axios';
import { Alert, succesAlert, errorAlert } from '../Alert/Alert';

function CreateAgreement() {
    const [errorBlock, setErrorBlock] = useState(false);
    const [errorObj, setErrorObj] = useState(false);
    const [textBlock, setTextBlock] = useState("");
    const [textObj, setTextObj] = useState("");
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [block, setBlock] = useState("");
    const [moneyValue, setMoneyValue] = useState("sum");
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        }).catch ((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function createAgreement () {
        // if (block === "" || moneyValue === "" || object === null) {
        //     alert("Илтимос сўралган малумотларни тўлдиринг!");
        // } else {
            axios.post(create_contract_api_url(), {
                "block": block ,
                "currency" : moneyValue,
                "project_id": object,
            }, {headers}).then((res) => {
                setErrorBlock(false);
                setErrorObj(false);
                setTextObj("");
                setTextBlock("");
                succesAlert();
                setTimeout(() => {
                    navigate("/admin/agreement")
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.block ? err.response.data.errors.block[0] : "" === 'The block field is required.') {
                    setErrorBlock(true);
                    setTextBlock("Илтимос блок киритинг!");
                }else {
                    setErrorBlock(false);
                    setTextBlock("");
                }
                if(err.response.data.errors.project_id ? err.response.data.errors.project_id[0] : "" === 'The project id field is required.') {
                    setErrorObj(true);
                    setTextObj("Илтимос объект танланг!");
                }else {
                    setErrorObj(false);
                    setTextObj("");
                }
                errorAlert()
            })
        // }

    }

  return (
    <Stack pb='70px' >
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Келишув қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                error={errorObj}       
                                value={object}
                                onChange={(e) => setObject(e.target.value) }
                            >
                                {
                                    allObject.map((item, index) => {
                                        return (
                                            <MenuItem key={index + 1} value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                                <FormHelperText sx={{color: "red"}}>{textObj}</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Блоcк:</Typography>
                            <TextField error={errorBlock} helperText={textBlock} autoComplete='off' value={block} onChange={(e) => setBlock(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Валютани танланг:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={moneyValue}
                                
                                onChange={(e) => setMoneyValue(e.target.value) }
                            >
                                <MenuItem value="sum">Сўм</MenuItem>
                                <MenuItem value="dollar">Доллар</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={createAgreement} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Келишув қўшиш
                        </Button>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateAgreement