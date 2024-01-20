import React from 'react'
import { Grid,  IconButton, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

function CostTable() {
    const navigate = useNavigate();

  return (
    <Grid container p={3}>
            <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}} xl={12}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThMoney>Category</ThMoney>
                    <ThMoney>Obyekt Nomi</ThMoney>
                    <ThComment>Ish Boshqaruvchi</ThComment>
                    <ThMoney>Summa (so'm)</ThMoney>
                    <ThComment>Izoh</ThComment>
                    <ThMoney>To'lov turi</ThMoney>
                    <ThId>Valyuta</ThId>
                    <ThMoney>Valyuta kursi</ThMoney>
                    <ThMoney>Sana</ThMoney>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdMoney>Instrument</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>800 mln</TdMoney>
                    <TdComment>Instrumentlar uchun</TdComment>
                    <TdMoney>Naxt</TdMoney>
                    <TdId>Usd</TdId>
                    <TdMoney>12345</TdMoney>
                    <TdMoney>18.01.2024</TdMoney>
                    <TdMoney>
                        <Stack direction="row">
                            <IconButton size='small' onClick={() => navigate('/home/detail-cost')} aria-label="delete">
                                <RemoveRedEyeIcon sx={{fontSize: '22px'}} color='success' />
                            </IconButton>
                            <IconButton size='small' onClick={() => navigate('/home/edit-cost')} aria-label="delete">
                                <EditIcon sx={{fontSize: '22px'}} color='warning' />
                            </IconButton>
                            <IconButton size='small' aria-label="delete">
                                <DeleteIcon sx={{fontSize: '22px'}} color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <Stack mt={2}>
                    <Typography variant='h6' fontWeight='bold'>Jami Summa: 3 mld so'm</Typography>
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