import React, { Fragment } from "react";
import useBoolean from "./useBoolean";

export default function BooleanToggle() {
  const [isToggle, { handleToggle, handleFalse, handleTrue }] = useBoolean();
  return (
    <Fragment>
      <div className="container my-5">
        <button
          type="button"
          onClick={handleToggle}
          className="btn btn-success"
        >
          Toggle
        </button>
        <button
          type="button"
          onClick={handleFalse}
          className="btn btn-danger mx-3"
        >
          False
        </button>
        <button type="button" onClick={handleTrue} className="btn btn-primary">
          True
        </button>
        <div>
          <h1>{isToggle.toString()}</h1>
        </div>
      </div>
    </Fragment>
  );
}
