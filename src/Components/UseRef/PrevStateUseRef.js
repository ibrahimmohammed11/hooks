import React, { Fragment, useState, useEffect, useRef } from "react";

export default function PrevStateUseRef() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef();

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <Fragment>
      <div className="container my-5">
        <input
          type="text"
          value={inputValue}
          className="form-control"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </Fragment>
  );
}
