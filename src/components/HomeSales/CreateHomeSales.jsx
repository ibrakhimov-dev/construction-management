import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Stack, Typography, FormControl, TextField, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';
import { base_url, create_home_sales_api_url, upload_img_url_api } from '../API/baseURL';
import { succesAlert, errorAlert, Alert } from '../Alert/Alert';

function CreateHomeSales() {
    const [errorName, setErrorName] = useState(false);
    const [errorAdress, setErrorAdress] = useState(false);
    const [errorImg, setErrorImg] = useState(false);
    const [textName, setTextName] = useState("");
    const [textAdress, setTextAdress] = useState("");
    const [textImg, setTextImg] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [value, setValue] = React.useState(null)
    const [imgUrl, setImgUrl] = useState('');
    const [imageName, setImageName] = useState("");
    const navigate = useNavigate();
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


    function createHomeSales () {
        // if (name === "" || location === "" || imageName === "" || imgUrl === "" ) {
        //     alert("Илтимос сўралган малумотларни тўлдиринг!");
        // } else {      
            axios.post(create_home_sales_api_url(), {
                name: name,
                address: location,
                image_name: imageName,
                image_url: imgUrl,
            }, {headers})
            .then((res) => {
                setErrorName(false);
                setErrorImg(false);
                setErrorAdress(false);
                setTextName("");
                setTextAdress("");
                setTextImg("");
                succesAlert()
                setTimeout(() => {
                    navigate('/admin/home-sales')
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.name ? err.response.data.errors.name[0] : "" === 'The name field is required.') {
                    setErrorName(true);
                    setTextName("Илтимос уй номини киритинг!");
                }else {
                    setErrorName(false);
                    setTextName("");
                }
                if(err.response.data.errors.address ? err.response.data.errors.address[0] : "" === 'The address field is required.') {
                    setErrorAdress(true);
                    setTextAdress("Илтимос уй манзилини киритинг!");
                }else {
                    setErrorAdress(false);
                    setTextAdress("");
                }
                if(err.response.data.errors.image_name ? err.response.data.errors.image_name[0] : "" === 'The image name field is required.') {
                    setErrorImg(true);
                    setTextImg("Илтимос расм юкланг!");
                }else {
                    setErrorImg(false);
                    setTextImg("");
                }
                errorAlert()
            })
        // }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Уй қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Уй Номи:</Typography>
                            <TextField helperText={textName} error={errorName} autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        
                        <FormControl fullWidth>
                            <Typography mt={2}>Манзил:</Typography>
                            <TextField helperText={textAdress} error={errorAdress} autoComplete='off' value={location} onChange={(e) => setLocation(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={6} xs={12} p={2}>   
                        <FormControl fullWidth>
                            <Typography>Уй расмини юкланг:</Typography>
                            <MuiFileInput error={errorImg} helperText={textImg} color='warning' value={value} onChange={handleChange} />
                        </FormControl> 
                        {
                            upload ? 
                            <Box mt={1} sx={{ width: '100%' }}>
                                <LinearProgress color='warning' />
                            </Box> : <></>
                        }
                        <Button onClick={createHomeSales} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Уй қўшиш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateHomeSales;