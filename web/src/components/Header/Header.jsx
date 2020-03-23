import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './styles.css';

function Header(props) {
  const navigate = useNavigate();

  return(
    <header>
      <span id='project_logo' onClick={() => navigate('/dashboard')}>Project logo</span>
      <nav>
        <span id='friendly_message'>Hello, <span id='user_name'>Admin!</span></span>
        <Link to='/register-student'>Register a student</Link>
        <Link to='/login'>Logout</Link>
      </nav>
    </header>
  );
}

export default Header;
