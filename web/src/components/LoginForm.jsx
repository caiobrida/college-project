import React, { useState } from 'react';

import Form from './common/Form';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputs = [
    {
      label: 'Email',
      value: email,
      id: 'email_input',
      setAnState: setEmail,
    },
    {
      label: 'Password',
      value: password,
      id: 'password_input',
      type: 'password',
      setAnState: setPassword,
    },
  ];

  const buttons = [
    {
      label: 'Login'
    },
    {
      label: 'Register',
      className: 'secondary_button',
      type: 'button',
      handleAction: function () {
        console.log('Working!')
      }
    }
  ];

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Submited');
  }

  return(
    <Form handleSubmit={handleSubmit} title='Sign in' inputs={inputs} buttons={buttons} />
  );
}

export default LoginForm;
