import { Box, Grid, Stack, List, Divider } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpeedIcon from '@mui/icons-material/Speed';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import logo from "../Assets/logo.png";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Stack>
      <Grid container  spacing={0}>
        <Grid item display={{xl: 'block', md: 'block', sm: 'none', xs: 'none'}} xl={2} md={3} sx={{overflowY: 'scroll', '&::-webkit-scrollbar': {width: 0}}} height='100vh' position='sticky' top={0} left={0} p={2} borderRight='solid 2px #ed744466'>
          <Box width='100%' textAlign='center'>
            <img src={logo} style={{marginTop: '20px', }} width='40%' alt='Garant Stroy' />
          </Box>
          <Divider sx={{mt: '20px'}} />
          <Box mt={1} width="100%">
            <nav aria-label="main mailbox folders" >
              <List>
                <ListItem onClick={() => navigate("dashboard")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SpeedIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("income")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Daromad" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("cost")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <RemoveCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Xarajatlar" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("worker")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Ishchilar" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate('object')} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Obyektlar" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("hired-worker")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Yollanma Ishchilar" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("equipment")}  sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Uskunalar" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("agreement")}  sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HandshakeIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Kelishuv" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate("home-sales")}  sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HolidayVillageIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Uy Savdosi" />
                  </ListItemButton>
                </ListItem>
                <Divider sx={{mt: '20px'}} />
                <ListItem onClick={() => navigate('daily-expenses')}  sx={{mt: '20px', '&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddHomeIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Uy Xarajatlari" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate('car-expenses')}  sx={{mt: '20px', '&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DirectionsCarIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Mashina Xarajatlari" />
                  </ListItemButton>
                </ListItem>
                <ListItem onClick={() => navigate('others-expenses')}  sx={{mt: '20px', '&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CurrencyExchangeIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Boshqa Xarajatlar" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item xl={10} md={9} sm={12} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
      <Grid container display={{xl: 'none', md: 'none', sm: 'flex', xs: 'flex'}} alignItems='center' sx={{
        width: '100%',
        height: '70px',
        position: 'fixed',
        boxShadow: '0 0 3px 3px #b6b6b6d4',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
      }}>
        <Grid item pt={1} xl={1} md={1} sm={2} xs={2} display='flex' justifyContent='center'>
          <img src={logo}  width='45' alt="Garant Stroy" />
        </Grid>
        <Grid p={0} m={0} item xl={11} md={11} sm={10} xs={10}>
          <BottomNavigation sx={{ width: '100%',  height: '70px', backgroundColor: '#fff', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'}, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            <Divider orientation="vertical" variant="middle" flexItem />
            <BottomNavigationAction onClick={() => navigate("dashboard")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" color='white' icon={<SpeedIcon />} />
            <BottomNavigationAction onClick={() => navigate("income")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<AddCircleOutlineIcon />} />
            <BottomNavigationAction onClick={() => navigate("cost")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" icon={<RemoveCircleOutlineIcon />} />
            <BottomNavigationAction onClick={() => navigate("worker")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<EngineeringIcon />} />
            <BottomNavigationAction onClick={() => navigate('object')}  sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" icon={<ApartmentIcon />} />
            <BottomNavigationAction onClick={() => navigate("hired-worker")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<GroupIcon />} />
            <BottomNavigationAction onClick={() => navigate("equipment")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" icon={<SettingsIcon />} />
            <BottomNavigationAction onClick={() => navigate("agreement")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" icon={<HandshakeIcon />} />
            <BottomNavigationAction onClick={() => navigate("home-sales")} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Nearby" value="nearby" icon={<HolidayVillageIcon />} />
            <Divider orientation="vertical" variant="middle" flexItem />
            <BottomNavigationAction onClick={() => navigate('daily-expenses')} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<AddHomeIcon />} />
            <BottomNavigationAction onClick={() => navigate('car-expenses')} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<DirectionsCarIcon />} />
            <BottomNavigationAction onClick={() => navigate('others-expenses')} sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'}}} label="Folder" value="folder" icon={<CurrencyExchangeIcon />} />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Sidebar