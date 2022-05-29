import React, { createContext, useState } from "react";

export const CounterCtx = createContext(0);
CounterCtx.displayName = "counter";
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter((prev) => prev + 1);
  const decreaseCounter = () => setCounter((prev) => prev - 1);
  const value = { counter, increaseCounter, decreaseCounter };
  return (
    <CounterCtx.Provider value={value}>{props.children}</CounterCtx.Provider>
  );
};

export default CounterContextProvider;
