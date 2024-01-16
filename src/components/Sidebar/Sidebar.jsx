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
import logo from "../Assets/logo.png";
import SettingsIcon from '@mui/icons-material/Settings';
import AddHomeIcon from '@mui/icons-material/AddHome';

import React from 'react'
import { Outlet } from 'react-router-dom'

function Sidebar() {
  return (
    <Stack>
      <Grid container spacing={0}>
        <Grid item xl={2} height='100vh' position='sticky' top={0} left={0} p={2} borderRight='solid 2px #ed744466'>
          <Box width='100%' textAlign='center'>
            <img src={logo} style={{marginTop: '20px', }} width='40%' alt='Garant Stroy' />
          </Box>
          <Divider sx={{mt: '20px'}} />
          <Box mt={1} width="100%">
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SpeedIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Daromad" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <RemoveCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Xarajatlar" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Ishchilar" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Obyektlar" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Yollanma Ishchilar" />
                  </ListItemButton>
                </ListItem>
                <ListItem  sx={{'&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Uskunalar" />
                  </ListItemButton>
                </ListItem>
                <Divider sx={{mt: '20px'}} />
                <ListItem  sx={{mt: '20px', '&:hover': {borderRadius: '5px', backgroundColor: '#fe65294c', color: '#FE6529'} }} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddHomeIcon />
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{fontWeight: 'bold'}} primary="Uy Xarajatlari" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Grid>
        <Grid item xl={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Sidebar