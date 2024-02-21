import { Stack, Grid, Typography, Pagination, Select, FormControl, MenuItem, InputLabel, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import WorkerTable from './WorkerTable';

function Worker() {
    const [objectSelect, setObjectSelect] = useState("");
    const navigate = useNavigate();
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ишчилар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} >
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl sx={{mt: 1}} fullWidth>
                            <TextField color='warning' label='Исм Фамилия' variant='outlined' />
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Лавозими</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Лавозими"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Lavozimi 1</MenuItem>
                                <MenuItem value={20}>Lavozimi 2</MenuItem>
                                <MenuItem value={30}>Lavozimi 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Обект</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Обект"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Obyekt 1</MenuItem>
                                <MenuItem value={20}>Obyekt 2</MenuItem>
                                <MenuItem value={30}>Obyekt 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={() => navigate('/home/create-worker')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Ишчи қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <WorkerTable />
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

export default Worker