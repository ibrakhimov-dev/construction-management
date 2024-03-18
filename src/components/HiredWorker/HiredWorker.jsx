import { Grid, Stack, Typography, FormControl, Pagination, Select, MenuItem, InputLabel, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
    import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import HiredWorkerTable from './HiredWorkerTable';
import { base_url, hired_worker_api_url, all_object_api_url, delete_hired_worker_api_url } from '../API/baseURL';
import axios from 'axios';
import { ErrorAlert, DeleteAlert } from '../Alert/Alert';


function HiredWorker() {
    const [errorAlert, setErrorAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [objectSelect, setObjectSelect] = useState(null);
    const [isAgreeDelete, setIsAgreeDelete] = useState(false);
    const [worker, setWorker] = useState([]);
    const [allObject, setAllObject] = useState([]);
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
        axios.post(hired_worker_api_url(), {
            project_id: objectSelect, page: page
        }, {headers}).then((res) =>{
            console.log(res.data)
            setWorker(res.data.data);
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page)
        }).catch((err) => {
            console.log(err)
        })
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [objectSelect, page, isAgreeDelete])


    function deleteHiredWorker (id) {
        axios.delete(delete_hired_worker_api_url(id), {headers})
        .then((res) => {
            setDeleteAlert(true);
            setTimeout(() => {
                setDeleteAlert(false);
            }, 1000)
        }).catch((err) => {
            setErrorAlert(true);
            setTimeout(() => {
                setErrorAlert(false);
            }, 1000)
        })
        setIsAgreeDelete(true);
        setTimeout(() => {
            setIsAgreeDelete(false)
        }, 2500)
    }

    function refreshData () {
        axios.post(hired_worker_api_url(), {
            project_id: objectSelect, page: page
        }, {headers}).then((res) =>{
            console.log(res.data)
            setWorker(res.data.data);
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page)
        }).catch((err) =>{
            console.log(err)
        })
    }

  return (
    <Stack pb='70px' sx={{position: 'relative'}}>
        {
            errorAlert ? <ErrorAlert /> : <></>
        }
        {
            deleteAlert ? <DeleteAlert /> : <></>
        }
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ёлланма Ишчилар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                        <FormControl sx={{marginTop: 1 }} fullWidth >
                            <InputLabel id="demo-simple-select-label" sx={{color: 'black'}}>Обект</InputLabel>
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
                    <Grid item xl={6} md={6} sm={6} xs={12} display="flex" justifyContent={{xl: 'flex-end', md: 'flex-end', sm: "flex-start", xs: 'center'}}>
                        <Button onClick={() => navigate('/admin/create-hired-worker')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Ишчи қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <HiredWorkerTable hiredWorker={worker} deleteHiredWorker={deleteHiredWorker} refreshData={refreshData} />
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

export default HiredWorker