import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { themeOptions } from './style/Variables';
import SignIn from './components/Auth/SignIn';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
