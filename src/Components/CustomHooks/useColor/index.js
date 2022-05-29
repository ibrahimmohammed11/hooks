import React, { Fragment } from "react";
import useColor from "./useColor";

export default function BgColor() {
  const [color, changeColor] = useColor();
  return (
    <Fragment>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: `#${color}`,
        }}
      >
        <button className="btn btn-success" onClick={changeColor}>
          Change color
        </button>
      </div>
    </Fragment>
  );
}
