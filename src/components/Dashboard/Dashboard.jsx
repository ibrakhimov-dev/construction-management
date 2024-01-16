import { Box, Grid, Stack, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import workers from '../Assets/4431056.png'
import plusMoney from "../Assets/plus-money.webp";
import minusMoney from "../Assets/minus-money.webp";
import build from "../Assets/build.png";
import React from 'react'

function Dashboard() {
  const xLabels = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
  ];
  return (
    <Stack>
      <Grid container p={3}>
        <Grid item xl={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
          <Typography variant='h5' color='#fff' fontWeight='bold'>Dashboard</Typography>
        </Grid>
      </Grid>
      <Grid container >
        <Grid p={3} item xl={8} >
          <Box height='300px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Oxirgi 6 oylik foyda (mln so'm)</Typography>
            <LineChart
              series={[
                { data: [200, 550, 200, 850, 150, 500]},
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
        <Grid item xl={4} p={3}>
          <Box height='300px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Aktiv ishchilar</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={workers} style={{marginTop: '20px', }} width='120px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={3} p={2}>234 ta</Typography>   
            </Box>
            <Typography variant='h6' color='#fff' mt={4} p={2}>Jami ishchilar 300 ta</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={4} p={3}>
          <Box height='200px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Daromad</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={plusMoney} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>1 mlrd so'm</Typography>   
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} p={3}>
          <Box height='200px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Xarajatlar</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={minusMoney} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>300 mln so'm</Typography>   
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} p={3}>
          <Box height='200px' sx={{borderRadius: '10px', background: `linear-gradient(to right bottom, #272d7b, #fe6529)`, boxShadow: '0 0 3px 3px #bebebe'}}>
            <Typography variant='h6' color='#fff' p={2}>Tugallangan Obyektlar</Typography>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
              <img src={build} style={{marginTop: '10px', }} width='100px' alt='Garant Stroy' />
              <Typography variant='h6' color='#fff' mt={2} p={2}>12 ta</Typography>   
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Dashboard