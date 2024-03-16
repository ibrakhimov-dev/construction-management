import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter, HashRouter, Routes } from 'react-router-dom';
import { themeOptions } from './style/Variables';
import User from './components/Users/Users';
import SignIn from './components/Auth/SignIn';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import CreateIncome from './components/Income/CreateIncome';
import EditIncome from './components/Income/EditIncome';
import Cost from './components/Cost/Cost';
import CreateCost from './components/Cost/CreateCost';
import EditCost from './components/Cost/EditCost';
import DetailCost from './components/Cost/DetailCost';
import Worker from './components/Worker/Worker';
import EditWorker from './components/Worker/EditWorker';
import CreateWorker from './components/Worker/CreateWorker';
import Objects from './components/Objects/Objects';
import CreateObject from './components/Objects/CreateObject';
import EditObject from './components/Objects/EditObject';
import HiredWorker from './components/HiredWorker/HiredWorker';
import EditHiredWorker from './components/HiredWorker/EditHiredWorker';
import CreateHiredWorker from './components/HiredWorker/CreateHiredWorker';
import Equipment from './components/Equipment/Equipment';
import EditEquipment from './components/Equipment/EditEquipment';
import CreateEquipment from './components/Equipment/CreateEquipment';
import DailyExpenses from './components/DailyExpenses/DailyExpenses';
import EditDailyExpenses from './components/DailyExpenses/EditDailyExpenses';
import CreateDailyExpenses from './components/DailyExpenses/CreateDailyExpenses';
import Agreement from './components/Agreement/Agrement';
import DetailAgreement from './components/Agreement/DetailAgreement';
import CreateAgreement from './components/Agreement/CreateAgreement';
import HomeSales from './components/HomeSales/HomeSales';
import CreateHomeSales from './components/HomeSales/CreateHomeSales';
import DetailHomeSales from './components/HomeSales/DetaileHomeSales';
import AddExpensesHome from './components/HomeSales/AddExpensesHome';
import EditHomeSales from './components/HomeSales/EditHomeSales';
import CarExpenses from './components/CarExpenses/CarExpenses';
import CreateCarExpenses from './components/CarExpenses/CreateCarExpenses';
import EditCarExpenses from './components/CarExpenses/EditCarExpenses';
import OthersExpenses from './components/OthersExpenses/OtherExpenses';
import CreateOthersExpenses from './components/OthersExpenses/CreateOthersExpenses';
import EditOthersExpenses from './components/OthersExpenses/EditOthersExpenses';
import DetailWorker from './components/Worker/DetailWorker';
import DayOff from './components/Worker/DayOff';
import Avans from './components/Worker/Avans';
import Error from './components/Error/Error';
import ComeWent from './components/Worker/ComeWent';
import Edit from './components/HomeSales/Edit';
import { useState, useEffect } from 'react';
import { base_url, role_api_url } from './components/API/baseURL';
import axios from 'axios';

function App() {
  const [role, setRole] = useState('admin');
  const token = localStorage.getItem('accessToken');
  const headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
      "Access-Control-Allow-Origin": base_url
  }

  useEffect(() => {
    axios.get(role_api_url(), {headers})
    .then((res) => {
      setRole(res.data.role_user)
    })
  }, [])

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignIn />} />
          <Route path='*' element={<Error />} />
          <Route path='home' element={<Sidebar />}>
            {
              role === "admin" ? 
                <>
                  <Route index element={<Dashboard />} />
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<User />} />
                  <Route path='income' element={<Income />} />
                  <Route path='create-income' element={<CreateIncome />} />
                  <Route path='edit-income' element={<EditIncome />} />
                  <Route path='cost' element={<Cost />} />
                  <Route path='create-cost' element={<CreateCost />}/>
                  <Route path='edit-cost' element={<EditCost />} />
                  <Route path='detail-cost' element={<DetailCost />} />
                  <Route path='worker' element={<Worker />} />
                  <Route path='detail-worker' element={<DetailWorker/>} >
                    <Route index element={<DayOff />} />
                    <Route path='day-off' element={<DayOff />} />
                    <Route path='edit-worker' element={<EditWorker />} />
                    <Route path='come-went' element={<ComeWent />} />
                    <Route path='avans' element={<Avans />} />
                  </Route>
                  <Route path='create-worker' element={<CreateWorker />} />
                  <Route path='object' element={<Objects />} />
                  <Route path='create-object' element={<CreateObject />} />
                  <Route path='edit-object' element={<EditObject />} />
                  <Route path='hired-worker' element={<HiredWorker/>} />
                  <Route path='create-hired-worker' element={<CreateHiredWorker/>} />
                  <Route path='edit-hired-worker' element={<EditHiredWorker/>} />
                  <Route path='equipment' element={<Equipment />} />
                  <Route path='edit-equipment' element={<EditEquipment/>} />
                  <Route path='create-equipment' element={<CreateEquipment/>} />
                  <Route path='daily-expenses' element={<DailyExpenses />} />
                  <Route path='edit-daily-expenses' element={<EditDailyExpenses />} />
                  <Route path='create-daily-expenses' element={<CreateDailyExpenses />} />
                  <Route path='agreement' element={<Agreement />} />
                  <Route path='detail-agreement' element={<DetailAgreement />} />
                  <Route path='create-agreement' element={<CreateAgreement />} />
                  <Route path='home-sales' element={<HomeSales />} />
                  <Route path='create-home-sales' element={<CreateHomeSales />} />
                  <Route path='detail-home-sales' element={<DetailHomeSales />} />
                  <Route path='add-expenses-sales' element={<AddExpensesHome />} />
                  <Route path='edit-home-sales' element={<EditHomeSales />} />
                  <Route path='edit-house-trades' element={<Edit />} />
                  <Route path='car-expenses' element={<CarExpenses />} />
                  <Route path='create-car-expenses' element={<CreateCarExpenses />} />
                  <Route path='edit-car-expenses' element={<EditCarExpenses />} />
                  <Route path='others-expenses' element={<OthersExpenses />} />
                  <Route path='create-others-expenses' element={<CreateOthersExpenses />} />
                  <Route path='edit-others-expenses' element={<EditOthersExpenses />} />
                </> :        
                <>
                  <Route index element={<Cost />} />
                  <Route path='cost' element={<Cost />} />
                  <Route path='create-cost' element={<CreateCost />}/>
                  <Route path='edit-cost' element={<EditCost />} />
                  <Route path='detail-cost' element={<DetailCost />} />
                  <Route path='worker' element={<Worker />} />
                  <Route path='detail-worker' element={<DetailWorker/>} >
                    <Route index element={<DayOff />} />
                    <Route path='day-off' element={<DayOff />} />
                    <Route path='edit-worker' element={<EditWorker />} />
                    <Route path='avans' element={<Avans />} />
                  </Route>
                  <Route path='create-worker' element={<CreateWorker />} />
                </>
            }
            
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
