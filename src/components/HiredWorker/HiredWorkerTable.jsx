import { Grid, Stack, IconButton } from '@mui/material'
import styled from 'styled-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function HiredWorkerTable() {
    const navigate = useNavigate();
  return (
    <Grid container p={3}>
        <Grid item xl={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
            <TheadWrapper>
                <ThId>T/r</ThId>
                <ThComment>Ism Familiya</ThComment>
                <ThMoney>Obyekt Nomi</ThMoney>
                <ThMoney>Telefon</ThMoney>
                <ThMoney>Ish haqi</ThMoney>
                <ThComment>Izoh</ThComment>
                <ThMoney>Boshqaruv</ThMoney>
            </TheadWrapper>
            <TbodyWrapper>
                <TdId>1</TdId>
                <TdComment>Ilhom Farmonov</TdComment>
                <TdMoney>Cambridge</TdMoney>
                <TdMoney>991234567</TdMoney>
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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
                <TdMoney>3 mln so'm</TdMoney>
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