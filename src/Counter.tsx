import React, { useEffect, useRef, useState } from 'react';

// setValueの中身
type MySetStateAction = number | ((prevState: number) => number);
type MyDispatch = (value: MySetStateAction) => void;

const Counter: React.FC<{}> = () => {
  const initialvalue: any = 0;
  const [value, setValue] = useState<number>(initialvalue);

  const incriment = () => {
    setValue((prevSrate) => prevSrate + 1);
  };

  const decrement = () => {
    setValue((prevSrate) => prevSrate - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  // const multiplication = () => {
  //   if (value % 3 === 0) {
  //     setValue((prevSrate) => prevSrate * 3);
  //   } else if (value % 2 === 0) {
  //     setValue((prevSrate) => prevSrate * 5);
  //   } else {
  //     setValue((prevSrate) => prevSrate * 2);
  //   }
  // };

  // const division = () => {
  //   setValue((prevSrate) => prevSrate / 2);
  // };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={incriment}>+1</button>
      <button onClick={decrement}>-1</button>
      {/* <button onClick={multiplication}>x</button>
      <button onClick={division}>÷</button> */}
      <div>This component was re-rendered {renderTimes.current} times! </div>
    </div>
  );
};

export default Counter;
