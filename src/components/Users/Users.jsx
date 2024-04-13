import { Stack, Grid, Typography, FormControl, TextField, Button, IconButton } from '@mui/material';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { base_url, 
    all_user_api_url, 
    create_user_api_url, 
    edit_user_api_url, 
    delete_user_api_url, 
    current_user_api_url } from '../API/baseURL';
import axios from 'axios';
import { Alert, editAlert, deleteAlert, succesAlert, errorAlert } from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate()
    const [errorUserName, setErrorUserName] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [userData, setUserData] = useState([]);
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");
    const [helperTextName, setHelperTextName] = useState("")
    const [helperTextUserName, setHelperTextUserName] = useState("")
    const [helperTextPassword, setHelperTextPassword] = useState("")
    const [isAgreeEdit, setIsAgreeEdit] = useState(false);
    const [editName, setEditName] = useState('');
    const [editUserName, setEditUserName] = useState('');
    const [editPassword, setEditPassword] = useState("");
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);

    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect (() => {
        axios.get(all_user_api_url(), {headers})
        .then((res) => {
            setUserData(res.data)
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [isAgreeDelete])

    function createUser () {
    //    if (name === "" || userName === "" || password === ""){
    //         alert("Илтимос сўралган малумотларни тўлдиринг!");
    //    } else {
            axios.post(create_user_api_url(), {
                "name": name,
                "username": userName,
                "password": password 
            }, {headers}).then((res) => {
                succesAlert()
                setName("");
                setPassword("");
                setUserName("");
                setHelperTextName("");
                setHelperTextPassword("");
                setHelperTextUserName("");
                setErrorName(false);
                setErrorUserName(false);
                setErrorPassword(false);
                axios.get(all_user_api_url(), {headers})
                .then((res) => {
                    setUserData(res.data)
                }).catch((err) => {
                    errorAlert()
                })
            }).catch((err) => {
                if(err.response.data.errors.name ? err.response.data.errors.name[0] : "" === "The name field is required."){
                    setErrorName(true)
                    setHelperTextName("Илтимос исм фамилия киритинг!")
                }else {
                    setErrorName(false)
                    setHelperTextName("")
                }
                if(err.response.data.errors.username ? err.response.data.errors.username[0] : "" === "The username field is required."){
                    setErrorUserName(true)
                    setHelperTextUserName("Илтимос усернаме киритинг!")
                }else {
                    setErrorUserName(false)
                    setHelperTextUserName("")
                }
                if(err.response.data.errors.password ? err.response.data.errors.password[0] : "" === "The password field is required."){
                    setErrorPassword(true)
                    setHelperTextPassword("Илтимос парол киритинг!")
                }else {
                    setErrorPassword(false)
                    setHelperTextPassword("")
                }
                errorAlert()
            })   
    //    }
    }

    function currentUser (id) {
        setIsAgreeEdit(true);
        setCurrentId(id);
        axios.get(current_user_api_url(id), {headers})
        .then((res) => {
            setEditName(res.data.user.name);
            setEditPassword(res.data.user.parol);
            setEditUserName(res.data.user.username);
        }).catch((err) => {
            errorAlert();
        })
    }

    function editUser () {
        if (editName === "" || editUserName === "" || editPassword === ""){
            alert("Илтимос сўралган малумотларни тўлдиринг!");
       } else {
           axios.put(edit_user_api_url(currentId), {
               "name": editName,
               "username": editUserName,
               "password": editPassword,
           }, {headers})
           .then((res) => {
                setIsAgreeEdit(false);
                setEditName("");
                setEditUserName("");
                setEditPassword("");
                editAlert()
                axios.get(all_user_api_url(), {headers})
                .then((res) => {  
                    setUserData(res.data)
                }).catch((err) => {
                    errorAlert();
                })
           })
       }
    }

    function deleteUser (id) {
        axios.delete(delete_user_api_url(id), {headers})
        .then((res) => {
            deleteAlert();
        }).catch((err) => {
            errorAlert();
        })
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Фойдаланувчилар</Typography>
            </Grid>
        </Grid>
        {
            isAgreeEdit ?
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Typography mt={-1} pl={2} variant='h6' fontWeight="bold">Таҳрирлаш:</Typography>
                    <Grid container>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Исм Фамилия:</Typography>
                                <TextField helperText={helperTextName} autoComplete='off' value={editName} onChange={(e) => setEditName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Усер Наме:</Typography>
                                <TextField helperText={helperTextUserName} autoComplete='off' value={editUserName} onChange={(e) => setEditUserName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>         
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Парол:</Typography>
                                <TextField helperText={helperTextPassword} autoComplete='off' value={editPassword} onChange={(e) => setEditPassword(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>         
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2} display='flex' justifyContent="flex-end">   
                            <Button onClick={editUser} sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Таҳрирлаш
                            </Button>               
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>:
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Typography mt={-1} pl={2} variant='h6' fontWeight="bold">Фойдаланувчи қўшиш</Typography>
                    <Grid container>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Исм Фамилия:</Typography>
                                <TextField helperText={helperTextName} error={errorName} autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Усер Наме:</Typography>
                                <TextField helperText={helperTextUserName} error={errorUserName} autoComplete='off' value={userName} onChange={(e) => setUserName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>          
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Парол:</Typography>
                                <TextField helperText={helperTextPassword} error={errorPassword} autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>          
                        </Grid>
                        <Grid xl={3} md={6} sm={6} xs={12} p={2} display='flex' justifyContent='flex-end'>   
                            <Button onClick={createUser} sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Фойдаланувчи қўшиш
                            </Button>               
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        }
        <Grid container p={3}>
            <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4',  width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
               <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                        <ThId>Т/р</ThId>
                        <ThMoney>Исм Фамилия:</ThMoney>
                        <ThMoney>Усер Наме:</ThMoney>  
                        <ThMoney>Парол:</ThMoney>  
                        <ThMoney>Бошқарув:</ThMoney>
                    </TheadWrapper>
                    {
                        userData.data?.map((item, index) => {
                            return (
                                <TbodyWrapper key={index + 1}>
                                    <TdId>{index + 1}</TdId>
                                    <TdMoney>{item.name}</TdMoney>
                                    <TdMoney>{item.username}</TdMoney>  
                                    <TdMoney>{item.parol}</TdMoney> 
                                    <TdMoney>
                                        <IconButton sx={{mx: 2}} size='small' onClick={() => currentUser(item.id)} aria-label="delete">
                                            <EditIcon sx={{fontSize: '22px'}} color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteUser(item.id)} sx={{mx: 2}} size='small'  aria-label="delete">
                                            <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                                        </IconButton>    
                                    </TdMoney> 
                                </TbodyWrapper>
                            )
                        })
                    }
               </Stack>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

const TheadWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`
const ThMoney = styled.div`
    width: 23%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`

const ThId = styled.div`
    width: 8%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`

const TbodyWrapper = styled.div`
    width: 100%;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    text-align: center;
    border-bottom: solid 2px #ed744466;
`

const TdMoney = styled.div`
    width: 23%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdId = styled.div`
    width: 8%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`

export default User