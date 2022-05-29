import axios from "axios";
import React, { Fragment } from "react";
import useQuery from "./useQuery";

export default function AdvancedFetch() {
  const { data } = useQuery(
    axios.get("https://foodish-api.herokuapp.com/api/")
  );
  return (
    <Fragment>
      <div>
        <img src={data?.image} alt="img" width="500px" height="500px" />
      </div>
    </Fragment>
  );
}
