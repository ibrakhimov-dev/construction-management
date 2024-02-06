import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { themeOptions } from './style/Variables';
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
import DetailAgrement from './components/Agreement/DetailAgrement';
import CreateAgreement from './components/Agreement/CreateAgreement';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignIn />} />
          <Route path='home' element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='create-income' element={<CreateIncome />} />
            <Route path='edit-income' element={<EditIncome />} />
            <Route path='cost' element={<Cost />} />
            <Route path='create-cost' element={<CreateCost />}/>
            <Route path='edit-cost' element={<EditCost />} />
            <Route path='detail-cost' element={<DetailCost />} />
            <Route path='worker' element={<Worker />} />
            <Route path='edit-worker' element={<EditWorker />}/>
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
            <Route path='detail-agreement' element={<DetailAgrement />} />
            <Route path='create-agreement' element={<CreateAgreement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
