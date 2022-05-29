import React, { Fragment } from "react";
import { CounterCtx } from "../../../../Context/CounterContext";
import { NameCtx } from "../../../../Context/NameContext";

export default function CompB() {
  return (
    <Fragment>
      <CounterCtx.Consumer>
        {({ counter }) => (
          <NameCtx.Consumer>
            {({ name, setName }) => {
              return (
                <div>
                  <h3>CompB</h3>
                  <h3>{counter}</h3>
                  <h2>{name}</h2>
                  <button
                    onClick={() => setName("hello")}
                    className="btn btn-success mr-3"
                  >
                    change
                  </button>
                </div>
              );
            }}
          </NameCtx.Consumer>
        )}
      </CounterCtx.Consumer>
    </Fragment>
  );
}
