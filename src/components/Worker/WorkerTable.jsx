import { Grid, Stack, IconButton, Checkbox, Typography } from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import AddDayOff from './AddDayOff';

function WorkerTable() {
    const navigate = useNavigate();
    const [isAgreeAddDayOff, setIsAgreeAddDayOff] = useState(false);
    const [checked, setChecked] = React.useState(true);

    function changeDayOff () {
        setIsAgreeAddDayOff(false);
    }
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (
    <Stack>
        {
            isAgreeAddDayOff ? <AddDayOff closeModal = {changeDayOff} /> : <></>
        }
        <Grid container p={3}>
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    <ThId>Чеcк:</ThId>
                    <ThId>Т/р:</ThId>
                    <ThComment>Исм Фамилия:</ThComment>
                    <ThMoney>Лавозими:</ThMoney>
                    <ThMoney>Обект Номи:</ThMoney>
                    <ThMoney>Телефон:</ThMoney>
                    <ThMoney>Иш ҳақи:</ThMoney>
                    <ThMoney>Иш куни(старт):</ThMoney>
                    <ThId>Дам:</ThId>
                    <ThMoney>Иш ҳақи(жами):</ThMoney>
                    <ThMoney>Аванс:</ThMoney>
                    <ThMoney>Бошқарув:</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon onClick={() => setIsAgreeAddDayOff(true)} sx={{cursor: 'pointer', fontSize: '18px',}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-worker')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-worker')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-income')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-income')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-income')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>1</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-income')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <TbodyWrapper>
                    <TdId>
                        <Checkbox
                        checked={checked}
                        color='success'
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </TdId>
                    <TdId>1</TdId>
                    <TdComment>Jahongir Farmonov</TdComment>
                    <TdMoney>Brigadir</TdMoney>
                    <TdMoney>Cambridge</TdMoney>
                    <TdMoney>991234567</TdMoney>
                    <TdMoney>150000</TdMoney>
                    <TdMoney>10.01.2024</TdMoney>
                    <TdId>
                        <Typography sx={{fontSize: '13px'}}>11</Typography>
                        <AddIcon sx={{cursor: 'pointer', fontSize: '18px'}} color='danger' />
                    </TdId>
                    <TdMoney>1200000</TdMoney>
                    <TdMoney>500000</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton onClick={() => navigate('/home/edit-income')} aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
                            </IconButton>
                        </Stack>
                    </TdMoney>
                </TbodyWrapper>
                <Stack mt={2}>
                    <Typography variant='h6' fontWeight='bold'>Жами Иш ҳақи: 3 млд сўм</Typography>
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
    width: 13%;
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
    width: 9%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 13%;
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

export default WorkerTable