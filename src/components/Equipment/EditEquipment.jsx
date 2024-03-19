import React from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { base_url, edit_tools_api_url, upload_img_url_api, current_tools_api_url, all_object_api_url } from '../API/baseURL';
import { MuiFileInput } from 'mui-file-input';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { errorAlert, editAlert, Alert } from '../Alert/Alert';

function EditEquipment() {
    const role = localStorage.getItem("role")
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [imgName, setImgName] = useState("");
    const [state, setState] = useState("active");
    const [price, setPrice] = useState(0);
    const [toolsName, setToolsName] = useState("");
    const navigate = useNavigate();
    const [upload, setUpload] = useState(false);
    const location = useLocation();
    const [value, setValue] = React.useState(null)
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
            setImgName(res.data.image_name);
            setImgUrl(res.data.image_url)  
            setUpload(false)  
        }).catch((err) => {
            errorAlert()
        })   
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

        axios.get(current_tools_api_url(location.state.id), {headers})
        .then((res) => {
            console.log(res.data.data)
            setToolsName(res.data.data.name);
            // setObject(res.data.dat)
            setPrice(res.data.data.price);
            setState(res.data.data.state);
            setObject(res.data.data.project_id)
            let file = new File([res.data.data.image_url.doc], res.data.data.image_name);
            setValue(file);
            setImgUrl(res.data.data.image_url);
            setImgName(res.data.data.image_name);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function editTools () {
        if (toolsName === "" || imgName === "" || imgUrl === "" || object === null) {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        }else {
        axios.put(edit_tools_api_url(location.state.id), {
            "name": toolsName , 
            "state": state,
            "image_name": imgName,
            "image_url": imgUrl,
            "price": price,
            "project_id": object
        }, { headers : {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
            "Access-Control-Allow-Origin": base_url
        }}).then((res) => {
            editAlert()
            setTimeout(() => {
                navigate(`/${role}/equipment`);
            }, 2000)
        })
        .catch((err) => {
            errorAlert()
        })}
    } 

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ускуналар (умимий малумот)</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Ускуна Номи:</Typography>
                            <TextField autoComplete='off' value={toolsName} onChange={(e) => setToolsName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
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
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Нархи:</Typography>
                            <TextField autoComplete='off' value={price} onChange={(e) => setPrice(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Ҳолати:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={state}
                                onChange={(e) => setState(e.target.value) }
                            >
                                <MenuItem value="active">Ишлайди</MenuItem>
                                <MenuItem value="inactive">Ишламайди</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Обект расмини юкланг:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                        {
                            upload ? 
                            <Box mt={1} sx={{ width: '100%' }}>
                                <LinearProgress color='warning' />
                            </Box> : <></>
                        }  
                            <Button onClick={editTools} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
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

export default EditEquipment