import React from 'react'
import { Grid,  IconButton, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function IncomeTable(props) {
    const navigate = useNavigate();

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = ("" + num).length; i >= 0 ; i = i - 3){
            arrNum.unshift(("" + num).substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteIncome (id) {
        props.deleteIncome(id);
    }

  return (
        <Grid container p={3}>
            <Grid item  p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
                <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                    <TheadWrapper>
                        <ThId>Т/р:</ThId>
                        <ThObj>Обект Номи:</ThObj>
                        <ThMoney>Сумма:</ThMoney>
                        <ThMoney>Сана:</ThMoney>
                        <ThComment>Изоҳ:</ThComment>
                        <ThMoney>Тўлов тури:</ThMoney>
                        <ThMoney>Валюта:</ThMoney>
                        <ThMoney>Валюта курси:</ThMoney>
                        <ThMoney>Бошқарув:</ThMoney>
                    </TheadWrapper>
                    {
                        props.income.map((item, index) => {
                            return (
                                <TbodyWrapper key={index + 1}>
                                    <TdId>{index + 1}</TdId>
                                    <TdObj>{item.project_name}</TdObj>
                                    <TdMoney>{currencyFormat(item.summa)} {item.currency}</TdMoney>
                                    <TdMoney>{item.date}</TdMoney>
                                    <TdComment>{item.comment}</TdComment>
                                    <TdMoney>
                                        {item.income_type === 'cash' ? `Naxt` : "O'tqazma"}
                                    </TdMoney>
                                    <TdMoney>
                                        {item.currency}
                                    </TdMoney>
                                    <TdMoney>{item.currency_rate} so'm</TdMoney>
                                    <TdMoney>
                                        <Stack direction="row" spacing={1}>
                                            <IconButton onClick={() => navigate('/home/edit-income', {state: {id : item.id}})} aria-label="delete">
                                                <EditIcon color='warning' />
                                            </IconButton>
                                            <IconButton onClick={() => deleteIncome(item.id)} aria-label="delete">
                                                <DeleteIcon color='danger' />
                                            </IconButton>
                                        </Stack>
                                    </TdMoney>
                                </TbodyWrapper>
                            )
                        })
                    }
                    <Stack mt={2}>
                        <Typography variant='h6' fontWeight='bold'>Жами Сумма: {currencyFormat(props.totalSumma)} сўм</Typography>
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
const ThObj = styled.div`
    width: 20%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThMoney = styled.div`
    width: 10%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 15%;
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
    font-size: 14px;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    text-align: center;
    border-bottom: solid 2px #ed744466;
`
const TdObj = styled.div`
    width: 19%;
    padding: 10px 0;
`
const TdMoney = styled.div`
    width: 9%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 14%;
    padding: 10px 0;
`
const TdId = styled.div`
    width: 4%;
    padding: 10px 0;
`

export default IncomeTable