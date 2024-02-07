import { Grid, Stack, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function OthersExpensesTable() {
    const navigate = useNavigate();
  return (
    <Grid container p={3}>
        <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThComment>Izoh:</ThComment>
                    <ThMoney>Sana</ThMoney>
                    <ThComment>Summa</ThComment>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Xayriya uchun</TdComment>
                    <TdMoney>21.01.2024</TdMoney>
                    <TdComment>3 mln so'm</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-others-expenses')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Xayriya uchun</TdComment>
                    <TdMoney>21.01.2024</TdMoney>
                    <TdComment>3 mln so'm</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-others-expenses')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>  
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Xayriya uchun</TdComment>
                    <TdMoney>21.01.2024</TdMoney>
                    <TdComment>3 mln so'm</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-others-expenses')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>  
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Xayriya uchun</TdComment>
                    <TdMoney>21.01.2024</TdMoney>
                    <TdComment>3 mln so'm</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-others-expenses')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>  
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Xayriya uchun</TdComment>
                    <TdMoney>21.01.2024</TdMoney>
                    <TdComment>3 mln so'm</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-others-expenses')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>  
                <Stack mt={2}>
                    <Typography variant='h6' fontWeight='bold'>Jami Summa: 13 mln so'm</Typography>
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
export default OthersExpensesTable;