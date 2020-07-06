import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../common/Form/Form';

import * as userService from '../../services/userService';

import './styles.css';

function RegisterUserForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);

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
      label: 'Password',
      value: password,
      id: 'password_input',
      placeholder: 'Your strong password',
      type: 'password',
      setAnState: setPassword,
    },
    {
      label: 'Confirm password',
      value: confirmPassword,
      id: 'confirmPass_input',
      type: 'password',
      setAnState: setConfirmPassword,
    },
  ];

  const buttons = [
    {
      label: 'Cancel',
      className: 'secondary_button',
      type: 'button',
      handleAction: function () {
        navigate('/login')
      }
    },
    {
      label: 'Register'
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) return setErrors({ message: 'Passwords doesnt match!' });

    const user = {
      name,
      email,
      password
    }

    const { err } = await userService.registerUser(user);
    
    if (err && err.response.status === 400) return setErrors({ message: err.response.data.msg });

    navigate('/login');
  }

  return(
    <Form
      className='register_form' 
      buttonsDisplay='btn_inline' 
      handleSubmit={handleSubmit} 
      title='Sign up' 
      errors={errors}
      inputs={inputs} 
      buttons={buttons} />
  );
}

export default RegisterUserForm;
