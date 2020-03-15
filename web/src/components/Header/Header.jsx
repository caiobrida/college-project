import React from 'react';

import './styles.css';

function Header(props) {
  return(
    <header>
      <span id='project_logo'>Project logo</span>
      <nav>
        <span id='friendly_message'>Hello, <span id='user_name'>User!</span></span>
        <a href='#'>Register a student</a>
        <a href='#'>Logout</a>
      </nav>
    </header>
  );
}

export default Header;
