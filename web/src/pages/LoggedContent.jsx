import React from 'react';

import Header from '../components/Header/Header';
import RegisterStudentForm from '../components/RegisterStudentForm/RegisterStudentForm';
import MainContent from '../components/MainContent/MainContent';


function LoggedContent() {
  return(
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default LoggedContent;