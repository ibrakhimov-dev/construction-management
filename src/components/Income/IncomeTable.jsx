import React from 'react'
import { Grid,  IconButton, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function IncomeTable() {
    const navigate = useNavigate();

  return (
    <Grid container p={3}>
            <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}} xl={12}>
                <TheadWrapper>
                    <ThId>T/r</ThId>
                    <ThObj>Obyekt Nomi</ThObj>
                    <ThMoney>Summa (so'm)</ThMoney>
                    <ThMoney>Sana</ThMoney>
                    <ThComment>Izoh</ThComment>
                    <ThMoney>To'lov turi</ThMoney>
                    <ThMoney>Valyuta</ThMoney>
                    <ThMoney>Valyuta kursi</ThMoney>
                    <ThMoney>Boshqaruv</ThMoney>
                </TheadWrapper>
                <TbodyWrapper>
                    <TdId>1</TdId>
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>800 mln</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
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
                    <TdId>1</TdId>
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>800 mln</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl> */}
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl> */}
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
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
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>800 mln</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl> */}
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl> */}
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
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
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>800 mln</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl> */}
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl> */}
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
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
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>800 mln</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
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
                    <TdObj>Cambridge</TdObj>
                    <TdMoney></TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl> */}
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl> */}
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
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
                    <TdObj>Cambridge</TdObj>
                    <TdMoney>{}</TdMoney>
                    <TdMoney>13.01.2023</TdMoney>
                    <TdComment>A bino uchun to'lov</TdComment>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value) }
                            >
                                <MenuItem value="Naxt">Naxt</MenuItem>
                                <MenuItem value="O'tqazma">O'tqazma</MenuItem>
                            </Select>
                        </FormControl> */}
                        Naxt
                    </TdMoney>
                    <TdMoney>
                        {/* <FormControl  fullWidth size="small">
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={currency}
                                color='warning'
                                onChange={(e) => setCurrency(e.target.value) }
                            >
                                <MenuItem value='Usd'>Usd</MenuItem>
                                <MenuItem value='Rub'>Rub</MenuItem>
                                <MenuItem value="So'm">So'm</MenuItem>
                            </Select>
                        </FormControl> */}
                        Usd
                    </TdMoney>
                    <TdMoney>12300 so'm</TdMoney>
                    <TdMoney>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
                                <EditIcon color='warning' />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon color='danger' />
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
const ThObj = styled.div`
    width: 20%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThMoney = styled.div`
    width: 10%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 15%;
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
const TdObj = styled.div`
    width: 19%;
    padding: 10px 0;
`
const TdMoney = styled.div`
    width: 9%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 14%;
    padding: 10px 0;
`
const TdId = styled.div`
    width: 4%;
    padding: 10px 0;
`

export default IncomeTable