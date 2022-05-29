import React, { Fragment } from "react";
import CompB from "./CompB";

export default function CompA() {
  return (
    <Fragment>
      <div className="text-center">
        <h3>CompA</h3>
        <CompB />
      </div>
    </Fragment>
  );
}
