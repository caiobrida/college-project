import React from 'react';

import Input from './Input';
import Button from './Button';

import genRandomId from '../../utils/genRandomId';

function Form({ className, handleSubmit, title, inputs, buttons }) {
  return(
    <form onSubmit={handleSubmit} className={className || 'default_form'}>
      <h1>{ title }</h1>
      { inputs.map(input => (
        <Input 
          label={input.label} 
          value={input.value}
          id={input.id}
          type={input.type}
          setAnState={input.setAnState}
          key={input.id}
          />
      )) }
      { buttons.map(btn => (
        <Button 
          key={genRandomId(5)} 
          type={btn.type} 
          className={btn.className}
          handleAction={btn.handleAction}
          label={btn.label}/>
      )) }
    </form>
  );
}

export default Form;
