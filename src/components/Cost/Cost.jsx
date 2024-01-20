import { Stack, Grid, Typography, FormControl, Pagination, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';
import CostTable from './CostTable';

function Cost() {
    const [objectSelect, setObjectSelect] = useState("");
    const navigate = useNavigate()
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Xarajatlar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3} >
                    <Grid item xl={2}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Category"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Category 1</MenuItem>
                                <MenuItem value={20}>Category 2</MenuItem>
                                <MenuItem value={30}>Category 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={2}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Obyektlar</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Obyektlar"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Object 1</MenuItem>
                                <MenuItem value={20}>Object 2</MenuItem>
                                <MenuItem value={30}>Object 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Ish Boshqaruvchi</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Ish Boshqaruvchi"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Ish Boshqaruvchi 1</MenuItem>
                                <MenuItem value={20}>Ish Boshqaruvchi 2</MenuItem>
                                <MenuItem value={30}>Ish Boshqaruvchi 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={5} display='flex' justifyContent='flex-end' gap={2}>                      
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Dan (kun)" />
                            </DemoContainer>
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Gacha (kun)" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xl={12} display='flex' gap={1} justifyContent='flex-end' alignItems='center'>
                        <Button sx={{height: '55px', mt: 1}} size='large' variant='contained' color='success' endIcon={<SimCardDownloadIcon />}>
                            Export
                        </Button>
                        <Button onClick={() => navigate('/home/create-cost')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Xarajat qo'shish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <CostTable />
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} display='flex' justifyContent='flex-end' p={3}>
                <Stack spacing={2}>
                    <Pagination color='warning' count={10} />
                </Stack>
            </Grid>
        </Grid>
        
    </Stack>
  )
}



export default Cost