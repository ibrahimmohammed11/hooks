import React, { Fragment } from "react";
import useFetch from "./useFetch";

export default function FetchData() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <Fragment>
      <div className="container my-5">
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
    </Fragment>
  );
}
