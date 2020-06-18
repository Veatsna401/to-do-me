import React, {useState} from 'react';

const ComponentToggler = ({children}) => {
  const [isShowing, setIsShowing] = useState(true);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      {isShowing && children}
      <div className="big-btn" onClick={() => handleClick()}>
        <i className={isShowing ? "far fa-minus" : "far fa-plus"}></i>
      </div>
    </div>
  );
}

export default ComponentToggler;
