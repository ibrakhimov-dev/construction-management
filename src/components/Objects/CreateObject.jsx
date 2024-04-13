import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';
import { base_url, create_object_api_url, upload_img_url_api } from '../API/baseURL';
import { Alert, succesAlert, errorAlert } from '../Alert/Alert';


function CreateObject() {
    const [errorName, setErrorName] = useState(false);
    const [textName, setTextName] = useState("");
    const [errorImg, setErrorImg] = useState(false);
    const [textImg, setTextImg] = useState("");
    const [upload, setUpload] = useState(false);
    const [status, setStatus] = useState('active');
    const [value, setValue] = React.useState(null);
    const [name, setName] = useState("");
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
            errorAlert()
        })  
    } 

    function createObject () { 
        // if (name === "" || imageName === "" || imgUrl === "") {
        //     alert("Илтимос сўралган малумотларни тўлдиринг!")
        // } else {
            axios.post(create_object_api_url(), {
                name: name,
                state: status,
                image_name: imageName,
                image_url: imgUrl,
            }, {headers})
            .then((res) => {
                succesAlert();
                setErrorImg(false);
                setErrorName(false)
                setTextImg("");
                setTextName("")
                setTimeout(() => {
                    navigate('/admin/object')
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.image_name ? err.response.data.errors.image_name[0] : "" === 'The image name field is required.') {
                    setErrorImg(true);
                    setTextImg("Илтимос расм юкланг!");
                }else {
                    setErrorImg(false);
                    setTextImg("");
                }

                if(err.response.data.errors.name ? err.response.data.errors.name[0] : "" === 'The name field is required.') {
                    setErrorName(true);
                    setTextName("Илтимос объект номини киритинг!");
                }else {
                    setErrorName(false);
                    setTextName("");
                }
                errorAlert();
            })
        // }    
    }

  return (
    <>
    <Stack pb='70px'>      
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Обект қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Обект Номи:</Typography>
                            <TextField error={errorName} helperText={textName} autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
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
                            <MuiFileInput error={errorImg} helperText={textImg} color='warning' value={value} onChange={handleChange} />
                        </FormControl>
                        {
                            upload ? 
                            <Box mt={1} sx={{ width: '100%' }}>
                                <LinearProgress color='warning' />
                            </Box> : <></>
                        }
                        <Button onClick={createObject} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Обект қўшиш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
    </>
  )
}

export default CreateObject;