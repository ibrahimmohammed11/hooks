import React, { Fragment, useState, useEffect } from "react";

export default function UseEffectHook() {
  const [data, setData] = useState(() => "posts");
  const [items, setItems] = useState(() => []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [data]);
  return (
    <Fragment>
      <div>
        <button onClick={() => setData("posts")} className="btn btn-info m-4">
          Posts
        </button>
        <button
          onClick={() => setData("users")}
          className="btn btn-success m-4"
        >
          User
        </button>
        <button
          onClick={() => setData("comments")}
          className="btn btn-warning m-4"
        >
          Comments
        </button>
        {items.map((item, key) => {
          return <pre key={key}>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </Fragment>
  );
}
