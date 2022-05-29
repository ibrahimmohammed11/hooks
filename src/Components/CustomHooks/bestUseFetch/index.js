import React, { Fragment } from "react";
import useFetch from "./useFetch";

export default function BestFetch() {
  const { data: joke, loading, error, fetchData } = useFetch(
    "https://v2.jokeapi.dev/joke/Any"
  );
  console.log(joke);
  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);
  return (
    <Fragment>
      <div className="App">
        <h1>{joke?.joke || `${joke?.setup} :  ${joke?.delivery}`}</h1>

        <button className="btn btn-success" onClick={fetchData}>
          {" "}
          Refetch
        </button>
      </div>
    </Fragment>
  );
}
