import React, { Fragment, useState, useEffect, useRef } from "react";

export default function UseRef() {
  const [user, setUser] = useState("");
  const inputRef = useRef();
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <Fragment>
      <div className="container my-5">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={(e) => setUser(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </div>
    </Fragment>
  );
}
