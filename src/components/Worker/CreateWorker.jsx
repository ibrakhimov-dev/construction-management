import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Grid, Stack, Typography, FormControl, MenuItem, Select, TextField, Button, FormHelperText } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { base_url, all_object_api_url, create_worker_api_url } from '../API/baseURL';
import axios from 'axios';
import { succesAlert, errorAlert, Alert } from '../Alert/Alert';

function CreateWorker() {
    const [errorPhone, setErrorPhone] = useState(false);
    const [textPhone, setTextPhone] = useState("")
    const [errorName, setErrorName] = useState(false);
    const [textName, setTextName] = useState("");
    const [errorPosition, setErrorPosition] = useState(false);
    const [textPosition, setTextPosition] = useState("");
    const [errorObj, setErrorObj] = useState(false);
    const [textObj, setTextObj] = useState("");
    const [name, setName] = useState("");
    const role = localStorage.getItem("role");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState(0)
    const [objectSelect, setObjectSelect] = useState("");
    const [allObject, setAllObject] = useState([]);
    const navigate = useNavigate();
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
        }).catch((err) => {
            if (err.response.data.message === 'Unauthenticated.'){
                navigate('/login')
              }
        })
    }, [])

    function createWorker () {
        // if (phone === "" || name === "" || objectSelect === "" || position === "") {
        //     alert("Илтимос сўралган малумотларни тўлдиринг!");
        // } else {
            axios.post(create_worker_api_url(), {
                "name": name,
                "phone_number": phone,
                "position": position,
                "salary_rate": salary,
                "project_id": objectSelect,
            }, {headers}).then((res) => {
                setErrorName(false);
                setErrorObj(false);
                setErrorPhone(false);
                setErrorPosition(false);
                setTextName("");
                setTextObj("");
                setTextPhone("");
                setTextPhone("");
                succesAlert()
                setTimeout(() => {
                    navigate(`/${role}/worker`)
                }, 2000)
            }).catch((err) => {
                if(err.response.data.errors.phone_number ? err.response.data.errors.phone_number[0] : "" === 'The name field is required.') {
                    setErrorPhone(true);
                    setTextPhone("Илтимос ишчини телефон рақамини киритинг!");
                }else {
                    setErrorPhone(false);
                    setTextPhone("");
                } 

                if(err.response.data.errors.name ? err.response.data.errors.name[0] : "" === 'The name field is required.') {
                    setErrorName(true);
                    setTextName("Илтимос ишчини исмини киритинг!");
                }else {
                    setErrorName(false);
                    setTextName("");
                } 

                if(err.response.data.errors.project_id ? err.response.data.errors.project_id[0] : "" === 'The project id field is required.') {
                    setErrorObj(true);
                    setTextObj("Илтимос объект танланг!");
                }else {
                    setErrorObj(false);
                    setTextObj("");
                } 

                if(err.response.data.errors.position ? err.response.data.errors.position[0] : "" === 'The position field is required.') {
                    setErrorPosition(true);
                    setTextPosition("Илтимос ишчини лавозимини танланг!");
                }else {
                    setErrorPosition(false);
                    setTextPosition("");
                }

                


                errorAlert()
            })
        // }
    }

  return (
    <Stack pb='70px'>
        <Grid container p={3}>
            <Grid item xl={12} md={12} sm={12} xs={12} p={3} sx={{borderRadius: '10px', backgroundColor: '#272d7b'}}>
                <Typography variant='h5' color='#fff' fontWeight='bold'>Ишчи қўшиш</Typography>
            </Grid>
        </Grid>
        <Grid container p={3}>
            <Grid item p={3} xl={12} md={12} sm={12} xs={12} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4'}}>
                <Grid container>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Исм Фамилия:</Typography>
                            <TextField error={errorName} helperText={textName} autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" color='warning' variant="outlined" />
                        </FormControl>
                        <FormControl  fullWidth>
                            <Typography mt={2}>Лавозими:</Typography>
                            <Select
                                sx={{padding: 0, paddingLeft: 0}}
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                color='warning'
                                value={position}
                                error={errorPosition}
                                onChange={(e) => setPosition(e.target.value) }
                            >
                                <MenuItem value="brigadier">Бригадир</MenuItem>
                                <MenuItem value="master">Мастер</MenuItem>
                                <MenuItem value="fitter">Тўқувчи(Чилангар)</MenuItem>
                                <MenuItem value="form_worker">Опалубщик</MenuItem>
                                <MenuItem value="worker">Оддий ишчи</MenuItem>
                            </Select>
                            <FormHelperText sx={{color: "red"}}>{textPosition}</FormHelperText>
                        </FormControl>  
                        <FormControl  fullWidth>
                            <Typography mt={2}>Обект:</Typography>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                color='warning'
                                value={objectSelect}
                                error={errorObj}
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
                            <FormHelperText sx={{color: "red"}}>{textObj}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid xl={6} md={6} sm={12} xs={12} p={2}>
                        <FormControl fullWidth>
                            <Typography>Кунлик Иш Ҳақи:</Typography>
                            <TextField autoComplete='off' value={salary} onChange={(e) => setSalary(e.target.value)} id="outlined-basic" color='warning' type='number' variant="outlined" />
                        </FormControl>                              
                        <FormControl fullWidth>
                            <Typography mt={2}>Телофон рақами:</Typography>
                            <TextField error={errorPhone} helperText={textPhone} autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)} sx={{mt: 1}} id="outlined-basic" label="+998" color='warning' type='number' variant="outlined" />
                        </FormControl>
                            <Button onClick={createWorker} sx={{height: '55px', mt: 4}} size='large' variant='contained' color='warning' endIcon={<AddIcon />}>
                                Ишчи қўшиш
                            </Button>               
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Alert />
    </Stack>
  )
}

export default CreateWorker;