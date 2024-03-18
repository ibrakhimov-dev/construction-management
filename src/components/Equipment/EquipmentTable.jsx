import { Grid, Stack, IconButton } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function EquipmentTable(props) {
    const role = localStorage.getItem("role")
    const navigate = useNavigate();

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteTools (id) {
        props.deleteTools(id);
    }

  return (
    <Grid container p={3}>
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>Т/р</ThId>
                    <ThComment>Ускуна Номи</ThComment>
                    <ThMoney>Расм</ThMoney>
                    <ThMoney>Нархи</ThMoney>
                    <ThMoney>Ҳолати</ThMoney>
                    <ThComment>Обект Номи</ThComment>
                    <ThMoney>Бошқарув</ThMoney>
                </TheadWrapper>
                {
                    props.tools.map((item, index) => {
                        return (
                            <TbodyWrapper key={index + 1}>
                                <TdId>{index + 1}</TdId>
                                <TdComment>{item.name}</TdComment>
                                <TdMoney>
                                    <img src={item.image_url} width={60} alt={item.name} />
                                </TdMoney>
                                <TdMoney>{currencyFormat(item.price)} so'm</TdMoney>
                                <TdMoney>{item.state === "active" ? `Ishlaydi` : "Ishlamaydi"}</TdMoney>
                                <TdComment>{item.project_name}</TdComment>
                                <TdMoney>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton onClick={() => navigate(`/${role}/edit-equipment`, {state: {id: item.id}})} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteTools(item.id)} aria-label="delete">
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
    display: flex;
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
export default EquipmentTable