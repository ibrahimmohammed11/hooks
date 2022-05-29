import React, { Fragment, useContext } from "react";
import { CounterCtx } from "../../../Context/CounterContext";
import { NameCtx } from "../../../Context/NameContext";

export default function ContextHooks() {
  const { counter, increaseCounter, decreaseCounter } = useContext(CounterCtx);
  const { name, setName } = useContext(NameCtx);

  return (
    <Fragment>
      <div className="text-center my-5">
        <div>
          <h3>Counter value is {counter}</h3>
          <button onClick={increaseCounter} className="btn btn-success mr-3">
            Increase
          </button>
          <button onClick={decreaseCounter} className="btn btn-danger">
            Decrease
          </button>
        </div>
        <div>
          <h2>{name}</h2>
          <button
            onClick={() => setName("hello")}
            className="btn btn-success mr-3"
          >
            change
          </button>
        </div>
      </div>
      );
    </Fragment>
  );
}
