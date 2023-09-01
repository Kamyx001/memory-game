import React, { useState } from 'react';
import './Card.css';

interface CardProps {
  children: any;
  index: number;
  changeTurned: (index: number) => void;
}

const Card: React.FC<CardProps> = ({ children, index, changeTurned}) => {
  const [isTurned, setIsTurned] = useState(false);
  return (
    <div id='card' className={isTurned ? 'turned' : ''} onClick={() => {
      setIsTurned(!isTurned)
      changeTurned(index)
    }}>
      <div id='front'></div>
      <div id='back'>{children}</div>
    </div>
  );
}

export default Card;