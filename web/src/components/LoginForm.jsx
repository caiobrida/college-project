import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './common/Form/Form';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

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
        navigate('/register-user')
      }
    },
    {
      label: 'Login'
    },
  ];

  function handleSubmit(e) { // Auth demonstration
    e.preventDefault();

    if (email === 'admin@admin.com' && password === 'admin') navigate('/dashboard');
    else setErrors({ message: 'Invalid email or password!' });
  }

  return(
    <Form 
      buttonsDisplay='btn_inline' 
      handleSubmit={handleSubmit} 
      title='Sign in' 
      errors={errors}
      inputs={inputs} 
      buttons={buttons} />
  );
}

export default LoginForm;
