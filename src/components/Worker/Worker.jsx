import { Stack, Grid, Typography, Pagination, Select, FormControl, MenuItem, InputLabel, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import WorkerTable from './WorkerTable';
import { base_url, worker_api_url, delete_worker_api_url, all_object_api_url } from '../API/baseURL';
import axios from 'axios';

function Worker() {
    const [workerData, setWorkerData] = useState([]);
    const [objectSelect, setObjectSelect] = useState("");
    const [allObject, setAllObject] = useState([]);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
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

        axios.get(worker_api_url(), {
            params: {
                search: name,
                position: position,
                project_id: objectSelect
            },
            headers: headers
        }).then((res) => {
            setWorkerData(res.data.data);
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page);
        })
    }, [isAgreeDelete, objectSelect, position, name, page])

    function deleteWorker (id) {
        axios.delete(delete_worker_api_url(id), {headers})
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2000)
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ишчилар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} >
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                    <FormControl  fullWidth>
                            <Typography>Лавозими:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={position}
                                onChange={(e) => setPosition(e.target.value) }
                            >
                                <MenuItem value="brigadier">Бригадир</MenuItem>
                                <MenuItem value="master">Мастер</MenuItem>
                                <MenuItem value="fitter">Тўқувчи(Чилангар)</MenuItem>
                                <MenuItem value="form_worker">Опалубщик</MenuItem>
                                <MenuItem value="worker">Оддий ишчи</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xl={3} md={6} sm={6} xs={12}>
                        <FormControl  fullWidth>
                            <Typography>Обект:</Typography>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
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
                    <Grid item xl={3} md={6} sm={6} xs={12} display='flex' justifyContent='flex-end'>
                        <Button onClick={() => navigate('/home/create-worker')} sx={{height: '55px', mt: 3}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Ишчи қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <WorkerTable workerData={workerData} deleteWorker={deleteWorker}/>
        <Grid container mt='-20px' p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent={{xl: 'flex-end', md: 'flex-end', sm: 'flex-end', xs: 'center'}} p={3}>
                <Stack spacing={2}>
                    <Pagination size='small' color='warning' count={countPage} defaultPage={defoultPage} page={page} onChange={handleChange} />
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default Worker