import React, { Fragment, useState } from "react";
import { LoginFormClass, LoginFormFunction } from "./components";

export default function CompleteUseEffect() {
  const [visible, setVisible] = useState(true);
  return (
    <Fragment>
      <div>
        {visible && (
          <>
            <LoginFormClass />
            <LoginFormFunction />
          </>
        )}
        <button onClick={() => setVisible(!visible)}>toggle</button>
      </div>
    </Fragment>
  );
}
