import React, { useState } from 'react';

// setValueの中身
type MySetStateAction = number | ((prevState: number) => number);
type MyDispatch = (value: MySetStateAction) => void;

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const incriment = () => {
    setValue((prevSrate) => prevSrate + 1);
  };

  const decrement = () => {
    setValue((prevSrate) => prevSrate - 1);
  };

  // const multiplication = () => {
  //   setValue(value * 2);
  // };

  // const division = () => {
  //   setValue(value / 2);
  // };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={incriment}>+1</button>
      <button onClick={decrement}>-1</button>
      {/* <button onClick={multiplication}>x</button>
      <button onClick={division}>÷</button> */}
    </div>
  );
};

export default Counter;
