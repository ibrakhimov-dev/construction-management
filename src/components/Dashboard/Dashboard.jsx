import { Box, Grid, Stack, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import workers from '../Assets/4431056.png'
import plusMoney from "../Assets/plus-money.webp";
import minusMoney from "../Assets/minus-money.webp";
import build from "../Assets/build.png";
import React, { useEffect, useState } from 'react'
import { base_url, dashboard_api_url } from '../API/baseURL';
import axios from 'axios';

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({});
  const [isAgree, setIsAgree] = useState(false);
  const [xLabels, setALabels] = useState([
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
  ])
  const token = localStorage.getItem('accessToken');
  const headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
      "Access-Control-Allow-Origin": base_url
  }

  useEffect((res) => {
    axios.get(dashboard_api_url(), {headers})
    .then((res) => {
      setDashboardData(res.data);
      setALabels(res.data.months.reverse())
      setIsAgree(true);
    })
  }, [])

  function currencyFormat(num) {
    let arrNum = [];
    for (let i = ("" + num).toString().length; i >= 0 ; i = i - 3){
        arrNum.unshift(("" + num).substring(i - 3, i));
    }
    return arrNum.join(" ");
 }

  return (
    <Stack pb='80px'>
      <Grid container p={3}>
        <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
          <Typography variant='h5' color='#fff' fontWeight='bold'>Дашбоард</Typography>
        </Grid>
      </Grid>
      <Grid container >
        <Grid p={3} item xl={8} md={12} sm={12} xs={12}>
          <Box height={{xl: '300px', md: "300px", sm: "300px", xs: "350px"}} sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant="h6" color='#fff' p={2}>Охирги 6 ойлик фойда (млн сўм)</Typography>
            <LineChart
              series={[
                { data: [isAgree ? Math.round(dashboardData.profits[0]/1000000): 0, 
                isAgree ? Math.round(dashboardData.profits[1]/1000000) : 0, 
                isAgree ? Math.round(dashboardData.profits[2]/1000000) : 0, 
                isAgree ? Math.round(dashboardData.profits[3]/1000000) : 0, 
                isAgree ? Math.round(dashboardData.profits[4]/1000000) : 0, 
                isAgree ? Math.round(dashboardData.profits[5]/1000000): 0]},
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{width: '100%', '.MuiLineElement-root': {
                stroke: '#ffffff',
                strokeWidth: 2,
              },
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                strokeWidth:"0.5",
                fill:"#ffffff"
             },
             "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
              strokeWidth:"0.5",
              fill:"#ffffff"
              },
              '.MuiMarkElement-root': {
                stroke: '#8884d8',
                scale: '0.6',
                fill: '#fff',
                strokeWidth: 2,
              }}}
              height={250}
            />
          </Box>
        </Grid>
        <Grid item xl={4} md={12} sm={12} xs={12} p={3}>
          <Box height='300px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Актив ишчилар</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={workers} style={{marginTop: '20px', }} width='120px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={3} p={2}>{dashboardData.active_workers_number} та</Typography>   
            </Box>
            <Typography variant='h6' color='#fff' mt={4} p={2}>Жами ишчилар {dashboardData.all_workers_number} та</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={4} md={6} sm={6} xs={12} p={3}>
          <Box height='240px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Даромад (Жорий йил)</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={plusMoney} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>{currencyFormat(dashboardData.total_incomes_amount)} сўм</Typography>   
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} md={6} sm={6} xs={12} p={3}>
          <Box height='240px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Харажатлар (Жорий йил)</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={minusMoney} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>{currencyFormat(dashboardData.total_expenses_amount)} сўм</Typography>   
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} md={6} sm={6} xs={12} p={3}>
          <Box height='240px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Aктив обйеклар</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={build} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>{dashboardData.active_projects} та</Typography>   
            </Box>
            <Typography variant='h6' color='#fff' p={2}>Жами обйеклар {dashboardData.all_projects} та</Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Dashboard