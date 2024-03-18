import { Grid, Stack, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddHiredCost from './AddHiredCost'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function HiredWorkerTable(props) {
    const navigate = useNavigate();
    const [workerId, setWorkerId] = useState(null);
    const [isAgreeCost, setIsAgreeCost] = useState(false);

    function closeModal() {
        setIsAgreeCost(false);
        props.refreshData()
    }

    function workerDetail (id) {
        setIsAgreeCost(true);
        setWorkerId(id);
    }

    function deleteHiredWorker (id) {
        props.deleteHiredWorker(id)
    }

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

  return (
    <Grid container p={3}>
        {
            isAgreeCost ? <AddHiredCost closeModal = {closeModal} workerId={workerId} /> : <></>
        }
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>Т/р</ThId>
                    <ThComment>Исм Фамилия</ThComment>
                    <ThMoney>Обект Номи</ThMoney>
                    <ThMoney>Телефон</ThMoney>
                    <ThMoney>Умумий Сумма</ThMoney>
                    <ThComment>Изоҳ</ThComment>
                    <ThMoney>Бошқарув</ThMoney>
                </TheadWrapper>
                {
                    props.hiredWorker.map((item, index) => {
                        return (
                            <TbodyWrapper key={index + 1}>
                                <TdId>{index + 1}</TdId>
                                <TdComment>{item.name}</TdComment>
                                <TdMoney>{item.project_name}</TdMoney>
                                <TdMoney>{item.phone_number}</TdMoney>
                                <TdMoney>
                                    <Typography>{currencyFormat(item.total_amount)} сўм</Typography>
                                    <IconButton onClick={() => workerDetail(item.id)} sx={{ ml: '5px', width: '20px', height: '20px'}} aria-label="delete">
                                        <AddCircleIcon color='success' />
                                    </IconButton>
                                </TdMoney>
                                <TdComment>{item.comment}</TdComment>
                                <TdMoney>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton onClick={() => navigate('/admin/edit-hired-worker', {state: {id: item.id}})} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteHiredWorker(item.id)} aria-label="delete">
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
    width: 13%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 21.5%;
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
    width: 13%;
    padding: 10px 5px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TdComment = styled.div`
    width: 21.5%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
const TdId = styled.div`
    width: 5%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
export default HiredWorkerTable