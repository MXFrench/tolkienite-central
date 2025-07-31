import { useState, useEffect, useCallback } from "react";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export default function useFetch(url, options = {}, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);

    try {
      const response = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const data = await response.json();
      setValue(data);
    } catch (error) {
      setError(error);
      console.error("Something went wrong while fetching data: ", error);
    }

    setLoading(false);
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return { loading, error, value };
}