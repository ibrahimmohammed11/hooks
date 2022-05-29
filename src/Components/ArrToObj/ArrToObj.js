import React, { Fragment } from "react";

export default function ArrToObj() {
  const arr = ["a", "b", "c"];
  //   const obj = Object.assign({}, arr);
  //   const obj = { ...arr };
  const obj = {};

  // copy array elements to th object
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  console.log(obj);
  return (
    <Fragment>
      <div>ArrToObj</div>
    </Fragment>
  );
}
