import { Grid, Stack, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddHiredCost from './AddHiredCost'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function HiredWorkerTable() {
    const navigate = useNavigate();
    const [isAgreeCost, setIsAgreeCost] = useState(false);

    function closeModal() {
        setIsAgreeCost(false);
    }

  return (
    <Grid container p={3}>
        {
            isAgreeCost ? <AddHiredCost closeModal = {closeModal} /> : <></>
        }
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThComment>Ism Familiya</ThComment>
                    <ThMoney>Obyekt Nomi</ThMoney>
                    <ThMoney>Telefon</ThMoney>
                    <ThMoney>Umumiy Summa</ThMoney>
                    <ThComment>Izoh</ThComment>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
                    <TdComment>Ilhom Farmonov</TdComment>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>
                        <Typography>3 mln so'm</Typography>
                        <IconButton onClick={() => setIsAgreeCost(true)} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                            <AddCircleIcon color='success' />
                        </IconButton>
                    </TdMoney>
                    <TdComment>Yanvar oyi ish haqi</TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton onClick={() => navigate('/home/edit-hired-worker')} aria-label="delete">
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
export default HiredWorkerTable