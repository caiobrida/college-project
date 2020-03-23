import React from 'react';

import Header from '../components/Header/Header';

function LoggedContent({ Component }) {
  return(
    <>
      <Header />
      <Component />
    </>
  );
}

export default LoggedContent;