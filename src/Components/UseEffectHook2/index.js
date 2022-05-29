import React, { Fragment, useState, useEffect } from "react";

export default function UseEffectHook2() {
  const [data, setData] = useState(() => "posts");
  const [items, setItems] = useState(() => []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [data]);
  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
}
