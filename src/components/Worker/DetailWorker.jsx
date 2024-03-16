import { Stack, Grid, Typography,Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function DetailWorker() {
    const navigate = useNavigate();
    const [dayColor, setDayColor] = useState('#d35602')
    const [avansColor, setAvansColor] = useState('#FE6529')
    const [editColor, setEditColor] = useState('#FE6529')
    const [comeWentColor, setComeWentColor] = useState('#FE6529')
    

    function dayOff () {
        navigate('day-off')
        setDayColor("#d35602")
        setAvansColor("#FE6529")
        setEditColor("#FE6529")
        setComeWentColor("#FE6529")
    }

    function avans () {
        navigate('avans')
        setAvansColor("#d35602")
        setDayColor("#FE6529")
        setEditColor("#FE6529")
        setComeWentColor("#FE6529")
    }

    function edit () {
        navigate('edit-worker')
        setEditColor("#d35602")
        setAvansColor("#FE6529")
        setDayColor("#FE6529")
        setComeWentColor("#FE6529")
    }

    function comeWent() {
        navigate('come-went')
        setComeWentColor("#d35602")
        setEditColor("#FE6529")
        setAvansColor("#FE6529")
        setDayColor("#FE6529")
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Grid container>
                    <Grid item xl={12} md={12} sm={12} xs={12} display='flex' alignItems='center'>
                        <Typography color='#fff' variant='h6'>Иш бошқарувчи: Илҳом Фармонов</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid p={3} container>
            <Grid p={3} item xl={12}  sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <ButtonGroup color='warning' variant="contained" size='large' aria-label="Basic button group">
                    <Button onClick={dayOff} sx={{backgroundColor: `${dayColor}`}}>Дам Олиш</Button>
                    <Button onClick={avans} sx={{backgroundColor:  `${avansColor}`}}>Аванс</Button>
                    <Button onClick={comeWent} sx={{backgroundColor:  `${comeWentColor}`}}>Келди-кетди</Button>
                    <Button onClick={edit} sx={{backgroundColor: `${editColor}`}}>Тахрирлаш</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
        <Outlet />
    </Stack>
  )
}

export default DetailWorker