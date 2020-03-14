import React from 'react';

function Avatar(props) {
  return(
    <div>
      <label
        id='avatar'
        style={{backgroundImage: `url(${props.preview})`}}
        className={props.avatar ? 'has_avatar' : null}
      >
        <input type='file' onChange={ e => props.setAnState(e.target.files[0]) } />
        { props.avatar ? null : <span>+</span> }
      </label>
    </div>
  )
}

export default Avatar;
