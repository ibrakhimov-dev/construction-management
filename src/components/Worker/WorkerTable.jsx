import { Grid, Stack, IconButton} from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function WorkerTable(props) {
    const navigate = useNavigate();
    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event) => {
    //   setChecked(event.target.checked);
    // };

    function currencyFormat(num) {
        let arrNum = [];
        for (let i = ("" + num).length; i >= 0 ; i = i - 3){
            arrNum.unshift(("" + num).substring(i - 3, i));
        }
        return arrNum.join(" ");
     }

    function deleteWorker (id) {
        props.deleteWorker(id);
    }

    function edit (id) {
        navigate('/home/detail-worker');
        localStorage.setItem('workerId', id);
    }

  return (
    <Stack>
        <Grid container p={3}>
        <Grid item p={3} sx={{borderRadius: '10px', boxShadow: '0 0 3px 3px#b6b6b6d4', width: '100%', overflowX: 'scroll', '&::-webkit-scrollbar': {height: '0'},}} xl={12} md={12} sm={12} xs={12}>
            <Stack sx={{ minWidth: '1190px', overflow: 'scroll', '&::-webkit-scrollbar': {height: '0'}}}>
                <TheadWrapper>
                    {/* <ThId>Чеcк:</ThId> */}
                    <ThId>Т/р:</ThId>
                    <ThComment>Исм Фамилия:</ThComment>
                    <ThMoney>Лавозими:</ThMoney>
                    <ThMoney>Обект Номи:</ThMoney>
                    <ThMoney>Телефон:</ThMoney>
                    <ThMoney>Иш ҳақи (кунлик)</ThMoney>
                    <ThMoney>Бошқарув:</ThMoney>
                </TheadWrapper>
                {
                    props.workerData.map((item, index) => {
                        return(
                            <TbodyWrapper key={index + 1}>
                                {/* <TdId>
                                    <Checkbox
                                    checked={checked}
                                    color='success'
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TdId> */}
                                <TdId>{index + 1}</TdId>
                                <TdComment>{item.name}</TdComment>
                                <TdMoney>{item.position === 'brigadier' ? 'Бригадир': 
                                item.position === 'master' ? 'Мастер' :
                                item.position === 'fitter' ? 'Тўқувчи(Чилангар)' :
                                item.position === 'form_worker' ? 'Опалубщик' : "Оддий ишчи"}</TdMoney>
                                <TdMoney>{item.project_name}</TdMoney>
                                <TdMoney>{item.phone_number}</TdMoney>
                                <TdMoney>{currencyFormat(item.salary_rate)} сўм</TdMoney>
                                <TdMoney>
                                    <Stack direction="row" spacing={1}>
                                        <IconButton onClick={() => edit(item.id)} aria-label="delete">
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => deleteWorker(item.id)} aria-label="delete">
                                            <DeleteIcon color='danger' />
                                        </IconButton>
                                    </Stack>
                                </TdMoney>
                            </TbodyWrapper>
                        )
                    })
                }
            </Stack>
        </Grid>
        </Grid>
    </Stack>
  )
}

const TheadWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
`
const ThMoney = styled.div`
    width: 15%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThComment = styled.div`
    width: 15%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`
const ThId = styled.div`
    width: 5%;
    background-color: #272d7b;
    padding: 10px 0;
    color: #fff;
    border-right: solid 1px #fff;
    border-left: solid 1px #fff;
`

const TbodyWrapper = styled.div`
    width: 100%;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    text-align: center;
    border-bottom: solid 2px #ed744466;
`

const TdMoney = styled.div`
    width: 15%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdComment = styled.div`
    width: 15%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`
const TdId = styled.div`
    width: 5%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
`

export default WorkerTable