import React from 'react';

function Button(props) {
  return(
    <button
      type={props.type || 'submit'}
      className={props.className || 'primary_button'}
      onClick={props.handleAction || null}
    >
      {props.label}</button>
  )
}

export default Button;
