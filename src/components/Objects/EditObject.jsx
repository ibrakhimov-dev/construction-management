import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect} from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button, Box } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { MuiFileInput } from 'mui-file-input';
import { base_url, 
    upload_img_url_api, 
    delete_img_api_url, 
    edit_object_url_api, 
    current_object_url_api, 
    delete_object_api_url } from '../API/baseURL';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { editAlert, Alert, deleteAlert, errorAlert } from '../Alert/Alert';

function EditObject() {
    const [upload, setUpload] = useState(false);
    const [status, setStatus] = useState('active');
    const [value, setValue] = React.useState(null)
    const [name, setName] = useState("");
    const location = useLocation();
    const [imgUrl, setImgUrl] = useState("");
    const [imageName, setImageName] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    const handleChange = (newValue) => {
        setValue(newValue) 
        setUpload(true);      
    }

    if (upload) {
        const formData = new FormData();
        formData.append('image', value);
        axios.post(upload_img_url_api(), formData, {headers})
        .then((res) => {
            setImageName(res.data.image_name);
            setImgUrl(res.data.image_url)
            setUpload(false)
        }).catch((err) => {
           errorAlert();
        })  
    }

    useEffect (() => {
        axios.get(current_object_url_api(location.state.id), {headers})
        .then((res) => {
            console.log(res.data)
            setName(res.data.data.name);
            setStatus(res.data.data.state);
            setImageName(res.data.data.image_name);
            setImgUrl(res.data.data.image_url);
            let file = new File([res.data.data.image_url.doc], res.data.data.image_name);
            setValue(file);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function editObject () {
        if (name === "" || imageName === "" || imgUrl === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!")
        } else {
        axios.put(edit_object_url_api(location.state.id), {
            name: name,
            state: status,
            image_name: imageName,
            image_url: imgUrl,
        }, { headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
            "Access-Control-Allow-Origin": base_url
        }})
        .then((res) => {
            editAlert()
            setTimeout(() => {
                navigate('/admin/object')
            }, 2000)
        }).catch((err) => {
            errorAlert();
        })}
    }

    function deleteObject () {
        if (window.confirm("Сиз ростан ҳам ўчирмоқчимисз?")) {
            axios.post(delete_img_api_url(), {image_name: imageName}, {headers})
            .then((res) => {
                axios.delete(delete_object_api_url(location.state.id), {headers})
                .then((res) => {
                    deleteAlert()
                    setTimeout(() => {
                        navigate('/admin/object')
                    }, 2000)
                }).catch((err) => {
                    errorAlert();
                })
            }).catch((err) => {
                errorAlert()
            })
        }
    }

  return (
    <Stack pb='70px' sx={{position: 'relative'}}>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Обектни тахрирлаш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} md={12} sm={12} xs={12} xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Обект Номи:</Typography>
                            <TextField autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Ҳолати:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={status}
                                onChange={(e) => setStatus(e.target.value) }
                            >
                                <MenuItem value="finished">Тугалланган</MenuItem>
                                <MenuItem value="active">Тугалланмаган</MenuItem>
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        
                        <FormControl fullWidth>
                            <Typography>Обект расмини юкланг:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                        {
                            upload ? 
                            <Box mt={1} sx={{ width: '100%' }}>
                                <LinearProgress color='warning' />
                            </Box> : <></>
                        }
                        <Button onClick={deleteObject} sx={{height: '55px', mt: 5, mr: 2}} size='large' variant='contained' color='danger' endIcon={<DeleteIcon />}>
                            Delete Object
                        </Button> 
                        <Button onClick={editObject} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Таҳрирлаш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default EditObject;