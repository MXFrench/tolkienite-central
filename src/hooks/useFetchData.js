import { useEffect, useState } from "react";
import { fetchData } from "../lib/lib";

export default (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  const loadData = async (urlPath = path) => {
    setIsLoading(true);
    const data = await fetchData(urlPath);
    setData(data)
    setIsLoading(false);
  }

  useEffect(() => {
    const delay = setTimeout(loadData, 100);

    return () => clearTimeout(delay);
  }, []);

  return [isLoading, data, loadData];
}