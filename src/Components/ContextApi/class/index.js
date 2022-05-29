import React, { Fragment } from "react";
import { CounterCtx } from "../../../Context/CounterContext";

export default function ContextApi() {
  return (
    <Fragment>
      <CounterCtx.Consumer>
        {({ counter, increaseCounter, decreaseCounter }) => {
          return (
            <div className="text-center my-5">
              <h3>counter value is {counter}</h3>
              <button
                onClick={increaseCounter}
                className="btn btn-success mr-3"
              >
                Increase
              </button>
              <button onClick={decreaseCounter} className="btn btn-danger">
                Decrease
              </button>
            </div>
          );
        }}
      </CounterCtx.Consumer>
    </Fragment>
  );
}
