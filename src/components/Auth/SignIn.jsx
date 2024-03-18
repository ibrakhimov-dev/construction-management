import { Grid, Stack, Typography, TextField, Box, FormControl, FormGroup, Button } from '@mui/material'
import logo from "../Assets/logo.png";
import banner from "../Assets/banner.jpg"
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login_api_url, base_url, role_api_url } from '../API/baseURL';
import axios from 'axios';


function SignIn() {
    const [login , setLogin] = useState('')
    const [parol , setParol] = useState('')
    const navigate = useNavigate();
    
    const token = localStorage.getItem('accessToken');

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": base_url
    }

    function click () {
        if (login === "" || parol === "") {
            alert('Илтимос сўралган малумотларни тўлдиринг!')
        }else {
            axios.post(login_api_url(), {
                username: login,
                password: parol
            }, {headers})
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('accessToken', res.data.token)
                localStorage.setItem('role', res.data.role);
                if(res.data.role == "admin"){
                    navigate("/admin/dashboard")
                    window.location.reload()
                  }else if (res.data.role == "user"){
                    navigate("/user/cost")
                    window.location.reload()
                  }else {
                      navigate("/login")
                      window.location.reload() 
                  }
            }).catch((err) => {
                alert('Логин ёки парол хато!')
            })
        }
    }

  return (
    <Stack height='100vh'>
        <Grid container>
            <Grid item xl={6} md={6} sm={6} xs={12} padding={{xl: 5}} width='100%' height='100vh' textAlign='center'>
                <img src={logo} style={{marginTop: '50px'}} width='25%' alt='Garant Stroy' />
                <Typography variant='h3' fontWeight='bold' sx={{fontSize: {xl: '48px', md: '40px', sm: '28px', xs: '24px'}}} pt={3}>Tizimga kirish</Typography>
                <Box width='80%' margin='0 auto' pt={3}>
                    <FormControl fullWidth>
                        <FormGroup>
                            <TextField autoComplete='off' id="outlined-basic" margin='normal' value={login} onChange={(e) => {setLogin(e.target.value)}} label="Login" color='warning' variant="outlined" />
                        </FormGroup>
                        <FormGroup>
                            <TextField autoComplete='off' id="outlined-basic" margin='normal' value={parol} onChange={(e) => {setParol(e.target.value)}} label="Parol" color='warning' variant="outlined" />
                        </FormGroup>
                    </FormControl>
                    <Button onClick={click} sx={{marginTop: '30px', padding: '10px 0', fontSize: '16px'}} color='warning' variant='contained' fullWidth>Tizmga kirish</Button>
                </Box>
            </Grid>
            <Grid item xl={6} md={6} sm={6} xs={12} sx={{height: '100%', display: {xl: 'flex', md: 'flex', sm: 'flex', xs: 'none'}, justifyContent: 'center', alignItems: 'center'}} >
                <img src={banner} style={{width: '100%', height: "100%", objectFit: 'cover'}} alt="Cambridge Residence" />
            </Grid>
        </Grid>
    </Stack>
  )
}

export default SignIn;