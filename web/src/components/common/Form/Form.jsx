import React, { useMemo } from 'react';

import Input from '../Input';
import Button from '../Button';
import Avatar from '../Avatar';

import genRandomId from '../../../utils/genRandomId';

import './styles.css';

function Form({ 
    className, 
    buttonsDisplay, 
    handleSubmit, 
    title, 
    inputs, 
    inlineInputs, 
    avatarData,
    buttons 
  }) {

  const preview = useMemo(() => {
    if (avatarData) {
      return avatarData.avatar ? URL.createObjectURL(avatarData.avatar) : null 
    }
  }, [avatarData]);

  return(
    <form onSubmit={handleSubmit} className={className || 'default_form'}>
      <h1>{ title }</h1>
      
      { avatarData && <Avatar 
        avatar={avatarData.avatar} 
        preview={preview}
        setAnState={avatarData.setAnState}  /> }

      { inputs.map(input => (
        <Input 
          label={input.label} 
          value={input.value}
          id={input.id}
          type={input.type}
          placeholder={input.placeholder}
          setAnState={input.setAnState}
          key={input.id}
          />
      )) }

      { inlineInputs &&
        <div className='inline_group'> 
          {inlineInputs.map(input => (
          
            <Input 
              id={input.id}
              label={input.label}
              value={input.value}
              placeholder={input.placeholder}
              type={input.type}
              setAnState={input.setAnState}
              key={input.id}
            />
        
        ))} 
      </div>}

      <div className={buttonsDisplay || null}>
        { buttons.map(btn => (
          <Button 
            key={genRandomId(5)} 
            type={btn.type} 
            className={btn.className}
            handleAction={btn.handleAction}
            label={btn.label}/>
        )) }
      </div>
    </form>
  );
}

export default Form;
