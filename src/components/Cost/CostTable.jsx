import React from 'react'
import { Grid,  IconButton, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { base_url, role_api_url } from '../API/baseURL';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CostTable(props) {
    const navigate = useNavigate();
    const [role, setRole] = useState('admin');
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = ("" + num).length; i >= 0 ; i = i - 3){
            arrNum.unshift(("" + num).substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteExpenses (id) {
        props.deleteExpenses(id);
    }

    useEffect(() => {
        axios.get(role_api_url(), {headers})
        .then((res) => {
          setRole(res.data.role_user)
        })
      }, [])

  return (
    <Grid container p={3}>
            <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
               <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}} >
                <TheadWrapper>
                    <ThId>Т/р:</ThId>
                    <ThMoney>Категория:</ThMoney>
                    <ThMoney>Обект Номи:</ThMoney>
                    <ThComment>Иш Бошқарувчи:</ThComment>
                    <ThMoney>Сумма (сўм):</ThMoney>
                    <ThComment>Изоҳ:</ThComment>
                    <ThMoney>Тўлов тури:</ThMoney>
                    <ThId>Валюта:</ThId>
                    <ThMoney>Валюта курси:</ThMoney>
                    <ThMoney>Сана:</ThMoney>
                    <ThMoney>Бошқарув:</ThMoney>
                </TheadWrapper>
                {
                    props.ExpensesData?.map((item, index) => {
                        return (
                            <TbodyWrapper key={index + 1}>
                                <TdId>{index + 1}</TdId>
                                <TdMoney>
                                    {
                                        item.category === 'salary'? 'Иш ҳақи' : item.category === 'tool'? "Ускуна" :
                                        item.category === "food"? 'Озиқ-овқат' : "Бошқа харажатлар"
                                    }
                                </TdMoney>
                                <TdMoney>{item.project_name}</TdMoney>
                                <TdComment>{item.user_name}</TdComment>
                                <TdMoney>{item.currency === 'sum'? `${currencyFormat(item.summa)} so'm`: `${currencyFormat(item.summa)} $` }</TdMoney>
                                <TdComment>{item.comment}</TdComment>
                                <TdMoney>
                                    {
                                        item.expense_type === 'cash'? "Нахт" : "Ўтқазма"
                                    }
                                </TdMoney>
                                <TdId>
                                    {
                                        item.currency === 'dollar'? "$" : "сўм"
                                    }
                                </TdId>
                                <TdMoney>{item.currency_rate}</TdMoney>
                                <TdMoney>{item.date}</TdMoney>
                                <TdMoney>
                                    <Stack direction="row">
                                        <IconButton size='small' onClick={() => navigate('/home/detail-cost', {state: {id: item.id, summa: item.amount, name: item.user_name}})} aria-label="delete">
                                            <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                                        </IconButton>
                                        {
                                            role === 'admin' ? <>
                                                <IconButton size='small' onClick={() => navigate('/home/edit-cost', {state: {id: item.id}})} aria-label="delete">
                                                    <EditIcon sx={{fontSize: '22px'}} color='warning' />
                                                </IconButton>
                                                <IconButton size='small' onClick={() => deleteExpenses(item.id)}  aria-label="delete">
                                                    <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                                                </IconButton>
                                            </>: <></>
                                        }
                                    </Stack>
                                </TdMoney>
                            </TbodyWrapper>
                        )
                    })
                }
                <Stack mt={2}>
                    <Typography variant='h6' fontWeight='bold'>Жами Сумма: {currencyFormat(props.totalSumma)}сўм</Typography>
                </Stack>
               </Stack>
            </Grid>
        </Grid>
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
    width: 9%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 13.5%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThId = styled.div`
    width: 5%;
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
    width: 8%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 12.5%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdId = styled.div`
    width: 4%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`

export default CostTable;