import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
