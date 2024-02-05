import { Grid, Stack, IconButton } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function EquipmentTable() {
    const navigate = useNavigate();
  return (
    <Grid container p={3}>
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThComment>Uskuna Nomi</ThComment>
                    <ThMoney>Rasm</ThMoney>
                    <ThMoney>Narxi</ThMoney>
                    <ThMoney>Holati</ThMoney>
                    <ThComment>Obyekt Nomi</ThComment>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
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
                    <TdComment>Balgarka</TdComment>
                    <TdMoney>
                        <img src="https://olcha.uz/image/600x600/products/2022-04-20/elektricheskiy-balgarka-ag7106-2-48697-0.jpeg" width={60} alt="" />
                    </TdMoney>
                    <TdMoney>1 mlrd so'm</TdMoney>
                    <TdMoney>Ishlaydi</TdMoney>
                    <TdComment>Cambridge</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-equipment')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
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