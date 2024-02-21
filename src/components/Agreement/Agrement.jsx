import { Stack, Grid, Typography, FormControl, Button, MenuItem, Select, InputLabel, Pagination } from '@mui/material';
import { base_url, all_object_api_url, contract_api_url } from '../API/baseURL';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Agreement() {
    const navigate = useNavigate();
    const [contracts, setContracts] = useState([]);
    const [objectSelect, setObjectSelect] = useState(null);
    const [allObject, setAllObject] = useState([]);
    const [page, setPage] = React.useState(1);
    const [defoultPage, setDefoultPage] = useState(1);
    const [countPage, setCountPage] = useState(1);
    const token = localStorage.getItem('accessToken');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = num.toString().length; i >= 0 ; i = i - 3){
            arrNum.unshift(num.toString().substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    useEffect(() => {
        axios.post(contract_api_url(), {
            "project_id": objectSelect,
            page: page,
        } ,{headers}).then((res) => {
            setContracts(res.data.data)
            setCountPage(res.data.meta?.last_page);
            setPage(res.data.meta?.current_page);
            setDefoultPage(res.data.meta?.current_page)
        })
    }, [page, objectSelect])

    const handleChange = (event, value) => {
        setPage(value);
      };

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        })
    }, [])
  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Келишувлар</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={4} sm={6} xs={12}>
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
                    <Grid item xl={8} md={8} sm={6} xs={12} display="flex" justifyContent={{xl: 'flex-end', md: 'flex-end', sm: "flex-end", xs: 'center'}}>
                        <Button onClick={() => navigate('/home/create-agreement')} sx={{height: '55px', mt: 1}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                            Келишув қўшиш
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container p={3} fontSize={14}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px #b6b6b6d4'}}>
                <Grid container padding={3} fontWeight={600} color='#fff' textAlign="center" display={{xl: 'flex', md: "flex", sm: 'none', xs: 'none'}}>
                    <Grid item xl={1} md={1} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Т/р:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12}p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Обект Номи:</Grid>
                    <Grid item xl={2} md={2} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Блок:</Grid>
                    <Grid Item xl={3} md={3} sm={12} xs={12} p={1} borderRight={4}borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Сумма:</Grid>
                    <Grid item xl={3} md={3} sm={12} xs={12} p={1} borderColor='#fff' sx={{bgcolor: '#272d7b'}}>Detail:</Grid>
                </Grid>
                {
                    contracts.map((item,index) => {
                        return (
                            <Grid container key={index + 1} p={3} borderBottom='solid 2px #ed744466' alignItems="center" textAlign={{xl: 'center', md: "center", sm: 'left', xs: 'left'}}>                    
                                <Grid item xl={1} md={1} sm={12} xs={12}>
                                    <Typography pt={2} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Т/р</Typography>
                                    {index + 1}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Обект Номи:</Typography>
                                    {item.project_name}
                                </Grid>
                                <Grid item xl={2} md={2} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Блок:</Typography>
                                    {item.block}
                                </Grid>
                                <Grid Item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Summa:</Typography>
                                    {currencyFormat(item.total_amount)} {item.currency}
                                </Grid>
                                <Grid item xl={3} md={3} sm={12} xs={12}>
                                    <Typography pt={1} display={{xl: 'none', md: "none", sm: 'block', xs: 'block'}} fontWeight={700} color='#272d7b'>Detail:</Typography>
                                    <Button onClick={() => navigate("/home/detail-agreement", {state: {id: item.id}})} size='large' variant='contained' color='success' endIcon={<RemoveRedEyeIcon />}>Detail</Button>
                                </Grid>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Grid>
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

export default Agreement;