import { useState, useEffect } from "react";

const useQuery = (request) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await request;
        setData(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [request]);

  return { data };
};

export default useQuery;
