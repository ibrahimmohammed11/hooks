import React, { useRef, useState } from "react";
import useFetch from "../smipleuseFetch/useFetch";

export default function Jokes() {
  const [firstName, setFirstName] = useState("cris");
  const [lastName, setLastName] = useState("Ronaldo");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");

  const [data] = useFetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
  );

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <>
      <div className="container my-4">
        <center>
          <h1>The Joke Generator</h1>
          <h2>{data && data.value.joke}</h2>
          <form>
            <div className="row my-4">
              <div className="col-lg-6">
                <input
                  type="text"
                  ref={firstNameRef}
                  placeholder="First name"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  ref={lastNameRef}
                  placeholder="Last name"
                  className="form-control"
                />
              </div>
            </div>

            <button onClick={generateJoke} className="btn btn-success">
              Generate Joke
            </button>
          </form>
        </center>
      </div>
    </>
  );
}
