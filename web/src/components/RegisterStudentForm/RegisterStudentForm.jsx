import React, { useState } from 'react';

import Form from '../common/Form/Form';

import './styles.css';

function RegisterStudentForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [ra, setRa] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [avatar, setAvatar] = useState(null);

  const avatarData = {
    avatar,
    setAnState: setAvatar,
  };

  const inlineInputs = [
    {
      label: 'RG',
      value: rg,
      id: 'rg_input',
      setAnState: setRg,
    },
    {
      label: 'CPF',
      value: cpf,
      id: 'cpf_input',
      setAnState: setCpf,
    },
  ]

  const inputs = [
    {
      label: 'Name',
      value: name,
      placeholder: 'Full name',
      id: 'name_input',
      setAnState: setName,
    },
    {
      label: 'Email',
      value: email,
      placeholder: 'youremail@example.com',
      id: 'email_input',
      setAnState: setEmail,
    },
    {
      label: 'Contact',
      value: contact,
      id: 'contact_input',
      placeholder: 'Phone number',
      setAnState: setContact,
    },
    {
      label: 'RA',
      value: ra,
      id: 'ra_input',
      setAnState: setRa,
    },
  ];

  const buttons = [
    {
      label: 'Cancel',
      className: 'secondary_button',
      type: 'button',
      handleAction: function () {
        console.log('Working!')
      }
    },
    {
      label: 'Register'
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Submited');
  }

  return(
    <Form
      className='register_form' 
      buttonsDisplay='btn_inline' 
      handleSubmit={handleSubmit} 
      title='Register a Student'
      inlineInputs={inlineInputs}
      avatarData={avatarData}
      inputs={inputs} 
      buttons={buttons} />
  );
}

export default RegisterStudentForm;
