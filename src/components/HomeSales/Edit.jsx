import React, { useEffect, useState } from 'react';
import { Grid, Stack, Typography, FormControl, TextField, Button, Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';
import { base_url, 
    edit_home_sales_api_url, 
    detail_home_sales_api_url, 
    upload_img_url_api, 
    delete_img_api_url, 
    delete_home_sales_api_url } from '../API/baseURL';
import { editAlert, errorAlert, Alert, deleteAlert} from '../Alert/Alert';

function Edit() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [value, setValue] = React.useState(null)
    const [imgUrl, setImgUrl] = useState('');
    const [imageName, setImageName] = useState("");
    const navigate = useNavigate();
    const locationNavigate = useLocation();
    const [upload, setUpload] = useState(false);
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

    useEffect (() => {
        axios.get(detail_home_sales_api_url(locationNavigate.state.id), {headers})
        .then((res) => {
            setName(res.data.data.name);
            setLocation(res.data.data.address);
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

    if (upload) {
        const formData = new FormData();
        formData.append('image', value);
        axios.post(upload_img_url_api(), formData, {headers})
        .then((res) => {
            setImageName(res.data.image_name);
            setImgUrl(res.data.image_url)
            setUpload(false)
        }).catch((err) => {
           errorAlert()
        })  
    }


    function edit () {
        if (name === "" || location === "" || imageName === "" || imgUrl === "" ) {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {      
            axios.put(edit_home_sales_api_url(locationNavigate.state.id), {
                name: name,
                address: location,
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
                    navigate('/admin/home-sales')
                }, 2000)
            }).catch((err) => {
               errorAlert()
            })
        }
    }

    function deleteHomeSales() {
        if (window.confirm("Сиз ростан ҳам ўчирмоқчимисз?")) {
            axios.post(delete_img_api_url(), {image_name: imageName}, {headers})
            .then((res) => {
                axios.delete(delete_home_sales_api_url(locationNavigate.state.id), {headers})
                .then((res) => {
                    deleteAlert()
                    setTimeout(() => {
                        navigate('/admin/home-sales')
                    }, 2000)
                }).catch((err) => {
                    errorAlert()
                })
            }).catch((err) => {
                errorAlert()
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Уйни Таҳрирлаш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Уй Номи:</Typography>
                            <TextField autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        
                        <FormControl fullWidth>
                            <Typography mt={2}>Манзил:</Typography>
                            <TextField autoComplete='off' value={location} onChange={(e) => setLocation(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>   
                        <FormControl fullWidth>
                            <Typography>Уй расмини юкланг:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl> 
                        {
                            upload ? 
                            <Box mt={1} sx={{ width: '100%' }}>
                                <LinearProgress color='warning' />
                            </Box> : <></>
                        }
                        <Button onClick={deleteHomeSales} sx={{height: '55px', mt: 5, mr: 2}} size='large' variant='contained' color='danger' endIcon={<DeleteIcon />}>
                            Delete
                        </Button> 
                        <Button onClick={edit} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
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

export default Edit;