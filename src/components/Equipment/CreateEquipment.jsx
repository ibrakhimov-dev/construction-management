import React, { useEffect } from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { base_url, create_tools_api_url, all_object_api_url, upload_img_url_api } from '../API/baseURL';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';

function CreateEquipment() {
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [imgName, setImgName] = useState("");
    const [state, setState] = useState("active");
    const [price, setPrice] = useState(0);
    const [toolsName, setToolsName] = useState("");
    const navigate = useNavigate();
    const [value, setValue] = React.useState(null)
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })
    }, [])

    function uploadImg () {
        const formData = new FormData();
        formData.append('image', value);
        axios.post(upload_img_url_api(), formData, {headers})
        .then((res) => {
            setImgName(res.data.image_name);
            setImgUrl(res.data.image_url)
            
        })
    }

    function createTools () {
        axios.post(create_tools_api_url(), {
            "name": toolsName , 
            "state": state,
            "image_name": imgName,
            "image_url": imgUrl,
            "price": price,
            "project_id": object
        }, {headers}).then((res) => {
            navigate('/home/equipment')
        })
    }   

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uskuna Qo'shish</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Uskuna Nomi:</Typography>
                            <TextField value={toolsName} onChange={(e) => setToolsName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Obyekt:</Typography>
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
                            <Typography mt={2}>Narxi:</Typography>
                            <TextField value={price} onChange={(e) => setPrice(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl  fullWidth>
                            <Typography>Holati:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={state}
                                onChange={(e) => setState(e.target.value) }
                            >
                                <MenuItem value="active">Ishlaydi</MenuItem>
                                <MenuItem value="inactive">Ishlamaydi</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <Typography mt={2}>Obyekt rasmini yuklang:</Typography>
                            <MuiFileInput color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                            <Button onClick={uploadImg} sx={{height: '55px', mt: 5, mr:2}} size='large' variant='contained' color='success' endIcon={<CloudUploadIcon />}>
                                Upload Img
                            </Button>  
                            <Button onClick={createTools} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
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