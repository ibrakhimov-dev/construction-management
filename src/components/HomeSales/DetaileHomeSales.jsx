import { Stack, Grid, Typography, Button, IconButton} from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { base_url, detail_home_sales_api_url, home_sales_expenses_api_url, delete_home_sales_expenses_api_url } from "../API/baseURL";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailHomeSales () {
    const [home, setHome] = useState({});
    const [homeExpenses, setHomeExpenses] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [isAgreeDelete, setIsAgreeDelete] = useState(false)
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }


    useEffect (() => {
        axios.get(detail_home_sales_api_url(location.state.id), {headers})
        .then((res) => {
            setHome(res.data.data);
        })
        axios.get(home_sales_expenses_api_url(location.state.id), {headers})
        .then((res) => {
            console.log(res.data)
            setHomeExpenses(res.data.data);
        })
    }, [isAgreeDelete])

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function changeMoney (id) {
        navigate('/home/edit-home-sales', {state: {id: id}})
    }

    function deleteExpenses (id) {
        axios.delete(delete_home_sales_expenses_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

    return (
        <Stack pb='70px'>
            <Grid container p={3}>
                <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                    <Typography variant='h5' color='#fff' fontWeight='bold'>Uy Nomi: {home.name} Manzil: {home.address}</Typography>
                </Grid>
            </Grid>
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Grid container>
                        <Grid item xl={6} md={8} sm={8} xs={12} display='flex' alignItems='center'>
                            <Typography variant='h6'>Jami Summa: {home.total_amount} so'm</Typography>
                        </Grid>
                        <Grid item xl={6} md={4} sm={4} xs={12} display='flex' justifyContent='flex-end' gap={1}>
                            <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                                Export
                            </Button>
                            <Button onClick={() => navigate('/home/add-expenses-sales', {state: {id_home: home.id}})} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Xarajat qo'shish
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container p={3}>
        <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThComment>Izoh:</ThComment>
                    <ThComment>Summa:</ThComment>
                    <ThMoney>Sana:</ThMoney>
                    <ThMoney>Boshqaruv:</ThMoney>
                </TheadWrapper>
                {
                    homeExpenses.map((item, index) => {
                        return (
                            <TbodyWrapper key={index + 1}>
                                <TdId>{index + 1}</TdId>
                                <TdComment>{item.comment}</TdComment>
                                <TdComment>
                                    {item.summa} so'm
                                </TdComment>
                                <TdMoney>
                                    {item.date}
                                </TdMoney>
                                <TdMoney>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton onClick={() => changeMoney(item.id)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteExpenses(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </TdMoney>
                            </TbodyWrapper>
                        )
                    })
                }        
            </Stack>            
        </Grid>
    </Grid>
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
    font-size: 14px;
    text-align: center;
`
const ThMoney = styled.div`
    width: 20%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 30%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThId = styled.div`
    width: 10%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`

const TbodyWrapper = styled.div`
    width: 100%;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    text-align: center;
    border-bottom: solid 2px #ed744466;
`

const TdMoney = styled.div`
    width: 20%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 30%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TdId = styled.div`
    width: 10%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
export default DetailHomeSales;