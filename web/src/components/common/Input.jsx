import React from 'react';

function Input(props) {
  return(
    <div className='input_group'>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          value={props.value} 
          id={props.id}
          name={props.id}
          placeholder={props.placeholder || ''}
          type={props.type || 'text'}
          onChange={e => props.setAnState(e.target.value)}/>
      </div>
  );
}

export default Input;
