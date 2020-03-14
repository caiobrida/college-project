import React, { useState } from 'react';

import Form from './common/Form/Form';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputs = [
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
  ];

  const buttons = [
    {
      label: 'Register',
      className: 'secondary_button',
      type: 'button',
      handleAction: function () {
        console.log('Working!')
      }
    },
    {
      label: 'Login'
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Submited');
  }

  return(
    <Form buttonsDisplay='btn_inline' handleSubmit={handleSubmit} title='Sign in' inputs={inputs} buttons={buttons} />
  );
}

export default LoginForm;