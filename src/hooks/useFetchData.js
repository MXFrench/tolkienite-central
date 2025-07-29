import { useEffect, useState } from "react";
import { fetchData } from "../lib/lib";

const apiBaseUrl = "https://the-one-api.dev/v2";
const apiKey = import.meta.env.VITE_API_KEY;

export default (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchData(path);
      setData(data)
      setIsLoading(false);
    }

    const delay = setTimeout(loadData, 100);

    return () => clearTimeout(delay);
  }, []);

  return [isLoading, data];
}