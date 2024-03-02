import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid, Typography, IconButton, Stack, Select, FormControl, MenuItem, Button } from '@mui/material';

function DayOff() {
    const [day, setDay] = useState('1');
    const [date, setDate] = useState('');
  return (
    <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container padding={3} spacing={2}>
                    <Grid item xl={4} md={4} sm={4} xs={12}>
                    <FormControl  fullWidth>
                            <Typography>Қанча вақт дам олгани:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={day}
                                onChange={(e) => setDay(e.target.value) }
                            >
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='0.5'>0.5</MenuItem>
                            </Select>
                        </FormControl> 
                    </Grid>
                    <Grid item xl={4} md={4} sm={4} xs={12}>
                        <FormControl fullWidth>
                            <Typography mt='-8px'>Дам олган куни:</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker value={date} onChange={(e) => setDate(e)} label="Сана:" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xl={4} md={4} sm={4} xs={12} display='flex' justifyContent='flex-end'>
                        <Button sx={{height: '55px', mt: 3, textTransform: 'capitalize'}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            қўшиш
                        </Button> 
                    </Grid>
                </Grid>
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "flex", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={1} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={4} md={4} sm={12} xs={12}p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Дам олган куни:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Қанча вақт дам олгани:</Grid>
                    <Grid item xl={4} md={4} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Delete:</Grid>
                </Grid>
                            <Grid container p={3} borderBottom='solid 2px #ed744466' alignItems="center" textAlign={{xl: 'center', md: "center", sm: 'left', xs: 'left'}}>                    
                                <Grid item xl={1} md={1} sm={12} xs={12}>
                                    <Typography pt={2} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р:</Typography>
                                    1
                                </Grid>
                                <Grid item xl={4} md={4} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Дам олган куни:</Typography>
                                    01.17.2024
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Қанча вақт дам олгани:</Typography>
                                    0.5 kun dam oldi
                                </Grid>
                                <Grid item xl={4} md={4} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Delete:</Typography>
                                    <Stack direction="row" width='100%' display='flex' justifyContent='center'  spacing={1} mt='-7px'>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </Grid>
                            </Grid>
            </Grid>
        </Grid>
  )
}

export default DayOff