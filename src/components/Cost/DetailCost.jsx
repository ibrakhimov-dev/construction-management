import { Stack, Grid, Typography,Button, Pagination } from '@mui/material';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import styled from 'styled-components';
import React from 'react'

function DetailCost() {
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Xarajatlar (Umumiy Malumot)</Typography>
            </Grid>
        </Grid>
        <Grid p={3} container>
            <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid item xl={6} md={8} sm={8} xs={12} display='flex' alignItems='center'>
                        <Typography variant='h6'>Ish boshqaruvchi: Ilhom Farmonov</Typography>
                    </Grid>
                    <Grid item xl={6} md={4} sm={4} xs={12} display='flex' justifyContent='flex-end'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4',  width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
               <Stack sx={{ width: '1300px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                        <ThId>T/r</ThId>
                        <ThMoney>Qayerga Ishlatgani</ThMoney>
                        <ThMoney>Summasi</ThMoney>  
                        <ThMoney>Sana</ThMoney>  
                    </TheadWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney>  
                    </TbodyWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney>  
                    </TbodyWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney>  
                    </TbodyWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney>  
                    </TbodyWrapper>
                    <TbodyWrapper>
                        <TdId>1</TdId>
                        <TdMoney>Drel sotib olish uchun</TdMoney>
                        <TdMoney>1 mln 500 ming so'm</TdMoney>  
                        <TdMoney>18.01.2024</TdMoney>  
                    </TbodyWrapper>
                    <Stack mt={2}>
                        <Typography variant='h6' fontWeight='bold'>Jami Summa: 3 mld so'm</Typography>
                    </Stack>
               </Stack>
            </Grid>
        </Grid>
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={10} />
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
    width: 30%;
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

const TdMoney = styled.div`
    width: 30%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdId = styled.div`
    width: 5%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`

export default DetailCost