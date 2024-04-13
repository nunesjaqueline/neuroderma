import React, { useState } from 'react';


function Button({ fruit }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);  // Toggle the isClicked state
  };

  return (
    <button className={isClicked ? 'clicked' : ''} onClick={handleClick}>
      <img src={fruit} />
    </button>
  );
}

export default Button;