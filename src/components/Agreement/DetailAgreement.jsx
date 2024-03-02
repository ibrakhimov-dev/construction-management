import { Stack, Grid, Typography, FormControl, Pagination, IconButton, TextField, Button } from '@mui/material';
import { base_url, 
    delete_contract_api_url, 
    current_contract_api_url,
    contract_expenses_api_url,
    create_contract_expenses_api_url,
    delete_contract_expenses_api_url,
    edit_contract_expenses_api_url } from '../API/baseURL';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function DetailAgreement() {
    const navigate = useNavigate();
    const [currentId, setCurrentId] = useState(null);
    const [isAgreeEdit, setIsAgreeEdit] = useState(true);
    const [floor, setFloor] = useState("");
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const [summa , setSumma] = useState(0);
    const [square, setSquare] = useState(0);
    const [currentContract, setCurrentContract] = useState({});
    const [contractExpenses, setCurrentExpenses] = useState([]);
    const location = useLocation();
    const [editFloor, setEditFloor] = useState("");
    const [editSumma , setEditSumma] = useState(0);
    const [editSquare, setEditSquare] = useState(0);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    useEffect(() => {
        axios.get(current_contract_api_url(location.state.id), {headers})
        .then((res) => {
            setCurrentContract(res.data.data);
        })
        axios.get(contract_expenses_api_url(location.state.id), {headers})
        .then((res) => {
            setCurrentExpenses(res.data.data);
        })
    }, [isAgreeDelete])

    function deleteContract () {
        axios.delete(delete_contract_api_url(location.state.id), {headers})
        .then((res) => {
            navigate("/home/agreement")
        })
    }

    function editClick (id) {
        let currentExpenses = contractExpenses.filter((item) => {
            return item.id === id;
        });
        setIsAgreeEdit(false);
        setCurrentId(id);
        setEditSumma(currentExpenses[0].price);
        setEditFloor(currentExpenses[0].floor);
        setEditSquare(currentExpenses[0].square);
    }

    function deleteExpenses (id) {
        axios.delete(delete_contract_expenses_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

    function editExpenses () {
        axios.put(edit_contract_expenses_api_url(currentId), {
            "price": editSumma,
            "square": editSquare,
            "floor": editFloor,
            "contract_id": location.state.id
        }, {headers}).then((res) => {
            setIsAgreeEdit(true)
            setEditFloor(0);
            setEditFloor("");
            setEditSquare(0);
            axios.get(contract_expenses_api_url(location.state.id), {headers})
            .then((res) => {
                setCurrentExpenses(res.data.data);
            })
        })
    }

    function closeEdit () {
        setIsAgreeEdit(true);
    }

    function createExpenses () {
        if (floor === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {       
            axios.post(create_contract_expenses_api_url(), {
                "price": summa,
                "square": square,
                "floor": floor ,
                "contract_id": location.state.id
            }, {headers}).then((res) => {
                setFloor("");
                setSquare(0);
                setSumma(0);
                axios.get(contract_expenses_api_url(location.state.id), {headers})
                .then((res) => {
                    setCurrentExpenses(res.data.data);
                })
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>{currentContract.project_name} обекти {currentContract.block} блок келишув</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                {
                    isAgreeEdit ? <>
                        <Typography fontWeight={600}>Обектга келишув қўшиш:</Typography>
                        <Grid container spacing={3}>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <FormControl fullWidth>
                                    <Typography mt={2}>Сумма: ({currentContract.currency})</Typography>
                                    <TextField type='number' value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Typography mt={2}>Етаж:</Typography>
                                    <TextField value={floor} onChange={(e) => setFloor(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <FormControl fullWidth>
                                    <Typography mt={2}>O'lchov:</Typography>
                                    <TextField value={square} onChange={(e) => setSquare(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                                </FormControl>
                                <Button sx={{mt: 2, mr: 2}} variant='contained' color='success'>Export</Button>
                                <Button onClick={createExpenses}  sx={{mt: 2}} variant='contained' color='warning'>Қўшиш</Button>
                            </Grid>
                        </Grid>
                    </> : <>
                        <Typography fontWeight={600}>Обект келишувини тахрирлаш:</Typography>
                        <Grid container spacing={3}>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <FormControl fullWidth>
                                    <Typography mt={2}>Сумма: ({currentContract.currency})</Typography>
                                    <TextField type='number' value={editSumma} onChange={(e) => setEditSumma(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                                </FormControl>
                                <FormControl fullWidth>
                                    <Typography mt={2}>Етаж:</Typography>
                                    <TextField value={editFloor} onChange={(e) => setEditFloor(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <FormControl fullWidth>
                                    <Typography mt={2}>Ўлчов:</Typography>
                                    <TextField value={editSquare} onChange={(e) => setEditSquare(e.target.value)} id="outlined-basic" color='warning' type='number' variant="outlined" />
                                </FormControl>
                                <Button onClick={editExpenses}  sx={{mt: 2}} variant='contained' color='warning'>Таҳрирлаш</Button>
                                <Button onClick={closeEdit} sx={{mt: 2, ml: 2}} variant='contained' color='success'> <ArrowBackIcon /></Button>
                            </Grid>
                        </Grid>
                    </>
                }
                {/* <Typography mt={2} fontWeight={600}>Обектдаги барча келишувларни ўчириш:</Typography>
                <Button onClick={deleteContract}  sx={{mt: 2}} variant='contained' color='danger'>Ўчириш</Button> */}
            </Grid>
        </Grid>
        <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "flex", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={1} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12}p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Сумма:</Grid>
                    <Grid item xl={2} md={2} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Етаж:</Grid>
                    <Grid Item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Ўлчов:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Бошқарув:</Grid>
                </Grid>
                {
                    contractExpenses.map((item, index) => {
                        return (
                            <Grid container key={index + 1} p={3} borderBottom='solid 2px #ed744466' alignItems="center" textAlign={{xl: 'center', md: "center", sm: 'left', xs: 'left'}}>                    
                                <Grid item xl={1} md={1} sm={12} xs={12}>
                                    <Typography pt={2} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р</Typography>
                                    {index + 1}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Сумма:</Typography>
                                     {currencyFormat(item.price)} {currentContract.currency}    
                                </Grid>
                                <Grid item xl={2} md={2} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Етаж:</Typography>
                                    {item.floor}
                                </Grid>
                                <Grid Item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Ўлчов:</Typography>
                                    {item.square} m<sup>2</sup>
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12} display='flex' alignItems='center' justifyContent='center'>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Бошқарув:</Typography>
                                    <Stack direction="row" spacing={1} mt='-7px'>
                                        <IconButton onClick={() => editClick(item.id)} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteExpenses(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    </Stack>
  )
}

export default DetailAgreement