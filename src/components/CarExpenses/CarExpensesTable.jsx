import { Grid, Stack, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CarExpensesTable(props) {
    console.log(props.carExpensesDate)
    const navigate = useNavigate();

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteCarExpenses (id) {
        props.deleteCarExpenses(id);
    }

  return (
    <Grid container p={3}>
        <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>Т/р:</ThId>
                    <ThComment>Изоҳ:</ThComment>
                    <ThMoney>Сана:</ThMoney>
                    <ThComment>Сумма:</ThComment>
                    <ThMoney>Бошқарув:</ThMoney>
                </TheadWrapper>
                {
                    props.carExpensesData?.map((item,index) => {
                        return (
                            <TbodyWrapper key={index + 1}>
                                <TdId>{index + 1}</TdId>
                                <TdComment>{item.comment}</TdComment>
                                <TdMoney>{item.date}</TdMoney>
                                <TdComment>{currencyFormat(+item.summa)} сўм</TdComment>
                                <TdMoney>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton onClick={() => navigate('/home/edit-car-expenses', {state: {id: item.id}})} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteCarExpenses(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </TdMoney>
                            </TbodyWrapper> 
                        )
                    })
                }
                <Stack mt={2}>
                    <Typography variant='h6' fontWeight='bold'>Жами Сумма: {props.totalSumma} сўм</Typography>
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
    width: 15%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 32.5%;
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
    width: 15%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 32.5%;
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
export default CarExpensesTable;