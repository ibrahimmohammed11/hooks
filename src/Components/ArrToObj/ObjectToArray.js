import React, { Fragment } from "react";

export default function ObjectToArray() {
  const obj = {
    emp1: {
      id: 1,
      name: "Alice",
    },
    emp2: {
      id: 2,
      name: "Bob",
    },
  };

  //
  const propertyNames = Object.keys(obj);
  console.log(propertyNames);
  //

  //
  let propertyValues = Object.values(obj);
  let values = propertyValues.map((item) => Object.entries(item));
  console.log(values);
  //

  //
  const entries = Object.entries(obj);
  console.log(entries);
  //
  return (
    <Fragment>
      <div>ObjectToArray</div>
    </Fragment>
  );
}
