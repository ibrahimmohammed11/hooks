import React, { Fragment } from "react";

export default function ObjToArr() {
  const person = {
    firstName: "John",
    lastName: "Doe",
  };
  const nums = {
    1: 5,
    2: 7,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  };

  //
  const propertyNames = Object.keys(person);
  console.log(propertyNames);
  // [ 'firstName', 'lastName' ] array of keys
  //

  //
  const propertyValues = Object.values(person);
  console.log(propertyValues);
  // [ 'John', 'Doe' ] array of values
  //

  //
  const entries = Object.entries(person);
  console.log(entries);
  // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ] ] array of arries key and objects
  //

  //
  const numsArr = Object.entries(nums);
  console.log(numsArr);
  // [["1",5],["2",7],["3",0],["4",0],["5",0],["6",0],["7",0],["8",0],["9",0],["10",0],["11",0],["12",0]]
  //  array of arries key and objects
  //

  return (
    <Fragment>
      <div>ObjToArr</div>
    </Fragment>
  );
}
