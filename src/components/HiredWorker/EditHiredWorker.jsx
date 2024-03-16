import React from 'react'
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { base_url, all_object_api_url, edit_hired_worker_api_url, current_hired_worker_api_url } from '../API/baseURL';
import axios from 'axios';


function EditHiredWorker() {
    const [object, setObject] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [fullName, setFullName] = useState("");
    const [comment, setComment] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })

        axios.get(current_hired_worker_api_url(location.state.id), {headers})
        .then((res) => {
            console.log(res.data)
            setFullName(res.data.data.name);
            setComment(res.data.data.comment);
            setPhone(res.data.data.phone_number);
            setObject(res.data.data.project_id);
        })
    }, [])

    function editHiredWorker () {
        axios.put(edit_hired_worker_api_url(location.state.id), {
            name: fullName,
            phone_number: phone,
            comment: comment,
            project_id: object,
        }, {headers}).then((res) => {
            navigate('/home/hired-worker')
        })
    }

  return (
    <Stack>
        <Grid container p={3}> 
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ёлланма ишчилар (умимий малумот)</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={object}
                                onChange={(e) => setObject(e.target.value) }
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
                        <FormControl fullWidth>
                            <Typography mt={2}>Изоҳ:</Typography>
                            <TextField value={comment} onChange={(e) => setComment(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12} p={2}>
                            <FormControl fullWidth>
                                <Typography>Телофон рақами:</Typography>
                                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} id="outlined-basic" type='number' variant="outlined" />
                            </FormControl>
                            <Button onClick={editHiredWorker} sx={{height: '55px', mt: 5}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                                Таҳрирлаш
                            </Button>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default EditHiredWorker