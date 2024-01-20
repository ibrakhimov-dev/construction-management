import { Stack, Grid, Typography, Pagination, Select, FormControl, MenuItem, InputLabel, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import WorkerTable from './WorkerTable';

function Worker() {
    const [objectSelect, setObjectSelect] = useState("");
    const navigate = useNavigate();
  return (
    <Stack>
        <Grid container p={3}>
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ishchilar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} >
            <Grid item xl={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3}>
                        <FormControl sx={{mt: 1}} fullWidth>
                            <TextField color='warning' label='Ism Familiya' variant='outlined' />
                        </FormControl>
                    </Grid>
                    <Grid item xl={3}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Lavozimi</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Lavozimi"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Lavozimi 1</MenuItem>
                                <MenuItem value={20}>Lavozimi 2</MenuItem>
                                <MenuItem value={30}>Lavozimi 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Obyekt</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                label="Obyekt"
                                onChange={(e) => setObjectSelect(e.target.value)}
                            >
                                <MenuItem value={10}>Obyekt 1</MenuItem>
                                <MenuItem value={20}>Obyekt 2</MenuItem>
                                <MenuItem value={30}>Obyekt 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} display='flex' justifyContent='flex-end'>
                        <Button onClick={() => navigate('/home/create-hired-worker')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Ishchi qo'shish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <WorkerTable />
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

export default Worker