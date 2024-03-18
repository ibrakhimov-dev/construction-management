import { Box, Grid, Stack, List, Divider } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpeedIcon from '@mui/icons-material/Speed';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import logo from "../Assets/logo.png";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { base_url, logout_api_url } from '../API/baseURL';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios';

const token = localStorage.getItem('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    "Access-Control-Allow-Origin": base_url
  }

function Sidebar(props) {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  function logout() {
    axios.post(logout_api_url(), {}, { headers }).then((res) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('role');
      navigate("/login")
    })
  }

  return (
    <Stack>
      {
        role === 'admin' ?
          <>
            <Grid container spacing={0}>
              <Grid item display={{ xl: 'block', md: 'block', sm: 'none', xs: 'none' }} xl={2} md={3} sx={{ overflowY: 'scroll', '&::-webkit-scrollbar': { width: 0 } }} height='100vh' position='sticky' top={0} left={0} p={2} borderRight='solid 2px #ed744466'>
                <Box width='100%' textAlign='center'>
                  <img src={logo} style={{ marginTop: '20px', }} width='40%' alt='Garant Stroy' />
                </Box>
                <Divider sx={{ mt: '20px' }} />
                <Box mt={1} width="100%">
                  <nav aria-label="main mailbox folders" >
                    <List>
                      <ListItem onClick={() => navigate("/admin/dashboard")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SpeedIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Дашбоард" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/income")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <AddCircleOutlineIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Даромад" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/cost")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <RemoveCircleOutlineIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Харажатлар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <EngineeringIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Ишчилар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate('/admin/object')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ApartmentIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Обектлар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/hired-worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <GroupIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Ёлланма Ишчилар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/equipment")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SettingsIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Ускуналар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/agreement")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <HandshakeIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Келишув" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/admin/home-sales")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <HolidayVillageIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Уй Савдоси" />
                        </ListItemButton>
                      </ListItem>
                      <Divider sx={{ mt: '20px' }} />
                      <ListItem onClick={() => navigate('/admin/daily-expenses')} sx={{ mt: '20px', '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <AddHomeIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Уй Харажатлари" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate('/admin/car-expenses')} sx={{ mt: '20px', '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <DirectionsCarIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Машина Харажатлари" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate('/admin/others-expenses')} sx={{ mt: '20px', '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <CurrencyExchangeIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Бошқа Харажатлар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate('/admin/users')} sx={{ mt: '20px', '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <AccountCircleIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Фойдаланувчилар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={logout} sx={{ mt: '20px', color: "#f33c3c", '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <LogoutIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Logout" />
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
            <Grid container display={{ xl: 'none', md: 'none', sm: 'flex', xs: 'flex' }} alignItems='center' sx={{
              width: '100%',
              height: '70px',
              position: 'fixed',
              zIndex: 111,
              boxShadow: '0 0 3px 3px #b6b6b6d4',
              bottom: 0,
              left: 0,
              backgroundColor: '#fff',
            }}>
              <Grid item pt={1} xl={1} md={1} sm={2} xs={2} display='flex' justifyContent='center'>
                <img src={logo} width='45' alt="Garant Stroy" />
              </Grid>
              <Grid p={0} m={0} item xl={11} md={11} sm={10} xs={10}>
                <BottomNavigation showLabels sx={{ width: '100%', height: '70px', backgroundColor: '#fff', overflowX: 'scroll', '&::-webkit-scrollbar': { height: '0' }, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <BottomNavigationAction onClick={() => navigate("/admin/dashboard")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Dashboard" value="nearby" color='white' icon={<SpeedIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/income")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Дашбоард" value="folder" icon={<AddCircleOutlineIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/cost")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Харажатлар" value="nearby" icon={<RemoveCircleOutlineIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Ишчилар" value="folder" icon={<EngineeringIcon />} />
                  <BottomNavigationAction onClick={() => navigate('/admin/object')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Обектлар" value="nearby" icon={<ApartmentIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/hired-worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Ёлланма Ишчилар" value="folder" icon={<GroupIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/equipment")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Ускуналар" value="nearby" icon={<SettingsIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/agreement")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Келишув" value="nearby" icon={<HandshakeIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/admin/home-sales")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Уй Савдоси" value="nearby" icon={<HolidayVillageIcon />} />
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <BottomNavigationAction onClick={() => navigate('/admin/daily-expenses')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Уй Харажатлари" value="folder" icon={<AddHomeIcon />} />
                  <BottomNavigationAction onClick={() => navigate('/admin/car-expenses')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Машина Харажатлари" value="folder" icon={<DirectionsCarIcon />} />
                  <BottomNavigationAction onClick={() => navigate('/admin/others-expenses')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Бошқа Харажатлар" value="folder" icon={<CurrencyExchangeIcon />} />
                  <BottomNavigationAction onClick={() => navigate('/admin/users')} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Фойдаланувчилар" value="folder" icon={<AccountCircleIcon />} />
                  <BottomNavigationAction onClick={logout} sx={{ color: "#f33c3c", '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Logout" value="folder" icon={<LogoutIcon />} />
                </BottomNavigation>
              </Grid>
            </Grid>
          </> :
          <>
            <Grid container spacing={0}>
              <Grid item display={{ xl: 'block', md: 'block', sm: 'none', xs: 'none' }} xl={2} md={3} sx={{ overflowY: 'scroll', '&::-webkit-scrollbar': { width: 0 } }} height='100vh' position='sticky' top={0} left={0} p={2} borderRight='solid 2px #ed744466'>
                <Box width='100%' textAlign='center'>
                  <img src={logo} style={{ marginTop: '20px', }} width='40%' alt='Garant Stroy' />
                </Box>
                <Divider sx={{ mt: '20px' }} />
                <Box mt={1} width="100%">
                  <nav aria-label="main mailbox folders" >
                    <List>

                      <ListItem onClick={() => navigate("/user/cost")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <RemoveCircleOutlineIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Харажатлар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/user/worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <EngineeringIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Ишчилар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={() => navigate("/user/equipment")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <SettingsIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Ускуналар" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem onClick={logout} sx={{ mt: '20px', color: "#f33c3c", '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <LogoutIcon />
                          </ListItemIcon>
                          <ListItemText disableTypography sx={{ fontWeight: 'bold' }} primary="Logout" />
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
            <Grid container display={{ xl: 'none', md: 'none', sm: 'flex', xs: 'flex' }} alignItems='center' sx={{
              width: '100%',
              height: '70px',
              position: 'fixed',
              zIndex: 111,
              boxShadow: '0 0 3px 3px #b6b6b6d4',
              bottom: 0,
              left: 0,
              backgroundColor: '#fff',
            }}>
              <Grid item pt={1} xl={1} md={1} sm={2} xs={2} display='flex' justifyContent='center'>
                <img src={logo} width='45' alt="Garant Stroy" />
              </Grid>
              <Grid p={0} m={0} item xl={11} md={11} sm={10} xs={10}>
                <BottomNavigation showLabels sx={{ width: '100%', height: '70px', backgroundColor: '#fff', overflowX: 'scroll', '&::-webkit-scrollbar': { height: '0' }, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <BottomNavigationAction onClick={() => navigate("/user/cost")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Харажатлар" value="nearby" icon={<RemoveCircleOutlineIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/user/worker")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Ишчилар" value="folder" icon={<EngineeringIcon />} />
                  <BottomNavigationAction onClick={() => navigate("/user/equipment")} sx={{ '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Ускуналар" value="nearby" icon={<SettingsIcon />} />
                  <BottomNavigationAction onClick={() => navigate(logout)} sx={{ color: "#f33c3c", '&:hover': { borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529' } }} label="Logout" value="folder" icon={<LogoutIcon />} />
                </BottomNavigation>
              </Grid>
            </Grid>
          </>
      }
    </Stack>
  )
}

export default Sidebar