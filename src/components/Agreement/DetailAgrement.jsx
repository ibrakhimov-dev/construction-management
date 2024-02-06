import { Stack, Grid, Typography, Button, IconButton, TextField } from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from "react";

function DetailAgrement () {
    const [editMoney, setEditMoney] = useState(true);

    function changeMoney () {
        setEditMoney(false);
    }

    function clickEdit () {
        setEditMoney(true);
    }

    return (
        <Stack pb='70px'>
            <Grid container p={3}>
                <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                    <Typography variant='h5' color='#fff' fontWeight='bold'>Obyekt Nomi:</Typography>
                </Grid>
            </Grid>
            <Grid p={3} container>
                <Grid p={3} item xl={12} md={12} sm={12} xs={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                    <Grid container>
                        <Grid item xl={6} md={8} sm={8} xs={12} display='flex' alignItems='center'>
                            <Typography variant='h6'>Jami Summa: 300 mln so'm</Typography>
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
        <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThComment>Qavat:</ThComment>
                    <ThComment>Summa (metr kv)</ThComment>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper> 
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdComment>1-qavat</TdComment>
                    <TdComment>
                        {
                            editMoney ? <>
                                <Typography fontSize='13px'>3 mln so'm</Typography>
                                <IconButton onClick={changeMoney} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </> : <>
                                <TextField
                                label="So'm"
                                type="number"
                                color="warning"
                                id="outlined-size-small"
                                defaultValue="3000000"
                                size="small"
                                />
                                <IconButton onClick={clickEdit} sx={{mt: '-7px', ml: '5px'}} aria-label="delete">
                                    <EditIcon color='warning' />
                                </IconButton>
                            </>
                        }
                    </TdComment>
                    <TdMoney>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
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
    font-size: 14px;
    text-align: center;
`
const ThMoney = styled.div`
    width: 25%;
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
    width: 10%;
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
    width: 25%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 32.5%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TdId = styled.div`
    width: 10%;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
`
export default DetailAgrement;