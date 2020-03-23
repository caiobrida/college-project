import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import LoggedContent from './pages/LoggedContent';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import RegisterStudentForm from './components/RegisterStudentForm/RegisterStudentForm';
import MainContent from './components/MainContent/MainContent';
import NotFound from './pages/NotFound/NotFound';

function MainRoutes() {
  return(
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register-user' element={<RegisterUser />} />
      <Route path='/dashboard' element={<LoggedContent Component={ MainContent }/>} />
      <Route path='/register-student' element={<LoggedContent Component={ RegisterStudentForm }/>} />
      <Route path='*' element={<NotFound />} />
      <Redirect exact from='/' to='/login' />
    </Routes>
  );
}

export default MainRoutes;