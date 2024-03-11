import { Stack, Grid, Typography, FormControl, TextField, Button, IconButton } from '@mui/material';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { base_url } from '../API/baseURL';

function DetailCost() {
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [summa, setSumma] = useState(null);
    const [isAgreeEdit, setIsAgreeEdit] = useState(false);
    const [editComment, setEditComment] = useState('');
    const [editDate, setEditDate] = useState('');
    const [editSumma, setEditSumma] = useState(null);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    function correctDate (m) {
        if (m > 9) {
            return m
        } else {
            return `0${m}`;
        }
    }

    function editItemExpenses () {

    }

    function deleteItemExpenses () {

    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Харажатлар (Умумий Малумот)</Typography>
            </Grid>
        </Grid>
        <Grid p={3} container>
            <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid item xl={6} md={8} sm={8} xs={12} display='flex' alignItems='center'>
                        <Typography variant='h6'>Иш бошқарувчи: Илҳом Фармонов</Typography>
                    </Grid>
                    <Grid item xl={6} md={4} sm={4} xs={12} display='flex' justifyContent='flex-end'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {
            isAgreeEdit ?
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Typography mt={-1} pl={2} variant='h6' fontWeight="bold">Xаражатни Таҳрирлаш:</Typography>
                    <Grid container>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Изоҳ:</Typography>
                                <TextField value={editComment} onChange={(e) => setEditComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Сумма:</Typography>
                                <TextField color='warning' value={editSumma} onChange={(e) => setEditSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                            </FormControl>          
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography mt={-1} >Сана:</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={editDate} onChange={(e) => setEditDate(e)} label="Сана:" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>         
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>   
                            <Button sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Таҳрирлаш
                            </Button>               
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>:
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Typography mt={-1} pl={2} variant='h6' fontWeight="bold">Xаражат қўшиш:</Typography>
                    <Grid container>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Изоҳ:</Typography>
                                <TextField value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Сумма:</Typography>
                                <TextField color='warning' value={summa} onChange={(e) => setSumma(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                            </FormControl>          
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography mt={-1} >Сана:</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>         
                        </Grid>
                        <Grid xl={3} md={3} sm={6} xs={12} p={2}>   
                            <Button sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Xаражат қўшиш
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
                        <ThMoney>Қаерга Ишлатгани</ThMoney>
                        <ThMoney>Суммаси</ThMoney>  
                        <ThMoney>Сана</ThMoney>  
                        <ThMoney>Бошқарув:</ThMoney>
                    </TheadWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney> 
                        <TdMoney>
                            <IconButton sx={{mx: 2}} size='small' onClick={editItemExpenses} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton sx={{mx: 2}} size='small' onClick={deleteItemExpenses}  aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>    
                        </TdMoney> 
                    </TbodyWrapper>
                    <Stack mt={2}>
                        <Typography variant='h6' fontWeight='bold'>Жами Сумма: 3 млд сўм</Typography>
                    </Stack>
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

export default DetailCost