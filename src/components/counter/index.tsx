import React, { useState } from "react";
import styles from './styles.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div className={styles.count}>
      <button onClick={increment}>increment</button>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

