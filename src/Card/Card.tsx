


import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const [isTurned, setIsTurned] = useState(false);
  return (
    <div id='card' className={isTurned ? 'turned' : ''} onClick={() => setIsTurned(!isTurned)}>
      <div id='front'></div>
      <div id='back'>{props.children}</div>
    </div>
  );
}

export default Card;