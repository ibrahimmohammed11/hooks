import React, { Fragment, useState } from "react";

export default function UseStateHook({ initialCount }) {
  const [count, setCount] = useState(() => initialCount);
  const [theme, setTheme] = useState(() => "blue");
  // الافضل ال اينشيال فاليو تتعمل بالطريقه دي عشان ميحصلش ليها كول كل مره غير في الاول فقط
  // usestate lazy initial state (اسم الطريقه)
  return (
    <Fragment>
      <div>
        <button
          onClick={() => setCount(initialCount)}
          className="btn btn-danger my-4"
        >
          Reset
        </button>
        <div className="d-flex align-items-center">
          <button
            onClick={() => setCount((prevCount) => prevCount - 1)} // the best because it depends on prevstate
            className="btn btn-info m-4"
          >
            -
          </button>
          <div>
            Count: {count} {theme}
          </div>
          <button
            // onClick={() => setCount((prevCount) => prevCount + 1)}
            onClick={() => setCount(() => count + 1)}
            className="btn btn-info m-4"
          >
            +
          </button>
        </div>
      </div>
    </Fragment>
  );
}
