import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { base_url, all_object_api_url, current_worker_api_url, edit_worker_api_url } from '../API/baseURL';
import axios from 'axios';
import { errorAlert, editAlert, Alert } from '../Alert/Alert';

function EditWorker() {
    const role = localStorage.getItem("role");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState(0)
    const [objectSelect, setObjectSelect] = useState("");
    const [allObject, setAllObject] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const workerId = localStorage.getItem('workerId');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`,
        "Access-Control-Allow-Origin": base_url
    }

    useEffect(() => {
        axios.get(all_object_api_url(), {headers})
        .then((res) => {
            setAllObject(res.data.data);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })

        axios.get(current_worker_api_url(workerId), {headers})
        .then((res) => {
            setName(res.data.data?.name);
            setPhone(res.data.data?.phone_number);
            setSalary(res.data.data?.salary_rate);
            setPosition(res.data.data?.position);
            setObjectSelect(res.data.data?.project_id);
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })

    }, [])

    function editWorker () {
        if (phone === "" || name === "" || objectSelect === "" || position === "") {
            alert("Илтимос сўралган малумотларни тўлдиринг!");
        } else {
            axios.put(edit_worker_api_url(workerId), {
                "name": name,
                "phone_number": phone,
                "position": position,
                "salary_rate": salary,
                "project_id": objectSelect,
            }, {headers}).then((res) => {
                editAlert()
                setTimeout(() => {
                    navigate(`/${role}/worker`)
                }, 2000)
            }).catch((err) => {
                errorAlert()
            })
        }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid p={3} item xl={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}} >
                <Grid container>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                    <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Лавозими:</Typography>
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
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
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
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Кунлик Иш Ҳақи:</Typography>
                            <TextField autoComplete='off' value={salary} disabled={role === "admin" ? false : true} onChange={(e) => setSalary(e.target.value)} id="outlined-basic" color='warning' type='number' variant="outlined" />
                        </FormControl>                              
                        <FormControl fullWidth>
                            <Typography mt={2}>Телофон рақами:</Typography>
                            <TextField autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)} sx={{mt: 1}} id="outlined-basic" label="+998" color='warning' type='number' variant="outlined" />
                        </FormControl>
                        <Button onClick={editWorker} sx={{height: '55px', mt: 4}} size='large' variant='contained' color='warning' endIcon={<EditIcon />}>
                            Таҳрирлаш
                        </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default EditWorker;