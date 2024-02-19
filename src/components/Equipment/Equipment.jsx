import { Stack, Grid, Typography, Pagination, Select, FormControl, MenuItem, InputLabel, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import EquipmentTable from './EquipmentTable';
import { base_url, tools_api_url, delete_tools_api_url, all_object_api_url } from '../API/baseURL';
import axios from 'axios';

function Equipment() {
    const [objectSelect, setObjectSelect] = useState(null);
    const [tools, setTools] = useState([]);
    const [state, setState] = useState("");
    const [allObject, setAllObject] = useState([]);
    const [page, setPage] = React.useState(1);
    const [defaultPage, setDefaultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const [isAgreeDelete, setIsAgreeDelete] = useState(false)
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    const handleChange = (event, value) => {
        setPage(value);
      };

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })

        axios.post(tools_api_url(), {project_id: objectSelect, state: state}, {headers})
        .then((res) => {
            setTools(res.data.data)
            // setPage(res.data.meta.current_page);
            // setDefaultPage(res.data.meta.current_page);
            // setCountPage(res.data.meta.last_page)
        })
    }, [objectSelect, state, page, isAgreeDelete])

    function deleteTools(id) {
        axios.delete(delete_tools_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Uskunalar</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} >
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Holati</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={state}
                                label="Holati"
                                onChange={(e) => setState(e.target.value)}
                            >
                                <MenuItem value="active">Ishlaydi</MenuItem>
                                <MenuItem value="inactive">Ishlamaydi</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
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
                               {
                                    allObject.map((item, index) => {
                                        return (
                                            <MenuItem key={index + 1} value={item.id}>{item.name}</MenuItem>
                                        )
                                    })
                                }     
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={() => navigate('/home/create-equipment')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Uskuna qo'shish
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <EquipmentTable tools={tools} deleteTools={deleteTools} />
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={countPage} defaultPage={defaultPage} page={page} onChange={handleChange} />
                </Stack>
            </Grid>
        </Grid> 
    </Stack>
  )
}

export default Equipment