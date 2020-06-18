import React from 'react';

const LogoButton = ({onClick}) => {

  return (
    <div className="todo-logo" onClick={onClick} >
      <div className="logo">TO</div>
      <div className="add-btn">+</div>
      <div className="logo">DO</div>
    </div>
  );
}

export default LogoButton;
