import React from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button, FormHelperText } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { base_url, create_hired_worker_api_url, all_object_api_url } from '../API/baseURL';
import axios from 'axios';
import { succesAlert, errorAlert, Alert } from '../Alert/Alert';

function CreateHiredWorker() {
    const [errorName, setErrorName] = useState(false);
    const [textName, setTextName] = useState("");
    const [errorComment, setErrorComment] = useState(false);
    const [helperTextComment, setHelperTextComment] = useState("");
    const [errorPhone, setErrorPhone] = useState(false);
    const [textPhone, setTextPhone] = useState("")
    const [errorObj, setErrorObj] = useState(false);
    const [textObj, setTextObj] = useState("");
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [fullName, setFullName] = useState("");
    const [comment, setComment] = useState("");
    const [phone, setPhone] = useState("");
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
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, []) 

    function createHiredWorker () {
        // if (fullName === "" || phone === "" || comment === "" || object === null){
        //     alert("Илтимос сўралган малумотларни тўлдиринг!");
        // }else {
            axios.post(create_hired_worker_api_url(), {
                name: fullName,
                phone_number: phone,
                comment: comment,
                project_id: object,
            }, {headers}).then((res) => {
                succesAlert()
                setErrorComment(false);
                setErrorName(false);
                setErrorObj(false);
                setErrorPhone(false);
                setTextName("");
                setTextObj("");
                setTextPhone("");
                setHelperTextComment("");
                setTimeout(() => {                  
                    navigate('/admin/hired-worker')
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.project_id ? err.response.data.errors.project_id[0] : "" === 'The project id field is required.') {
                    setErrorObj(true);
                    setTextObj("Илтимос объект танланг!");
                }else {
                    setErrorObj(false);
                    setTextObj("");
                } 

                if(err.response.data.errors.comment ? err.response.data.errors.comment[0] : "" === 'The comment field must be a string.') {
                    setErrorComment(true);
                    setHelperTextComment("Илтимос изоҳ қолдиринг!");
                }else {
                    setErrorComment(false);
                    setHelperTextComment("");
                }

                if(err.response.data.errors.name ? err.response.data.errors.name[0] : "" === 'The name field is required.') {
                    setErrorName(true);
                    setTextName("Илтимос ишчини исмини киритинг!");
                }else {
                    setErrorName(false);
                    setTextName("");
                }  

                if(err.response.data.errors.phone_number ? err.response.data.errors.phone_number[0] : "" === 'The name field is required.') {
                    setErrorPhone(true);
                    setTextPhone("Илтимос ишчини телефон рақамини киритинг!");
                }else {
                    setErrorPhone(false);
                    setTextPhone("");
                } 
                errorAlert()
            })
        // }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ёлланма ишчилар қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField error={errorName} helperText={textName} autoComplete='off' value={fullName} onChange={(e) => setFullName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={object}
                                error={errorObj}
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
                            <Typography mt={2}>Изоҳ:</Typography>
                            <TextField error={errorComment} helperText={helperTextComment} autoComplete='off' value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                    <FormControl fullWidth>
                            <Typography>Телофон рақами:</Typography>
                            <TextField error={errorPhone} helperText={textPhone} autoComplete='off' value={phone} label="+998" onChange={(e) => setPhone(e.target.value)} id="outlined-basic" type='number' color='warning' variant="outlined" />
                        </FormControl>
                            <Button onClick={createHiredWorker} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Ишчи қўшиш
                            </Button>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateHiredWorker