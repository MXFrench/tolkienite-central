import { useEffect, useState } from "react";

const apiBaseUrl = "https://the-one-api.dev/v2";
const apiKey = import.meta.env.VITE_API_KEY;

export default (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Data was fetched.")

      const fetchUrl = `${apiBaseUrl}${path}`;
      try {
        const response = await fetch(fetchUrl, {
          headers: {
            "Authorization": `Bearer ${apiKey}`,
          }
        });

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        setIsLoading(false);
        setData(data);
      } catch (error) {
        console.error("Something went wrong while fetching data: ", error);
      }
    }

    const delay = setTimeout(fetchData, 100);

    return () => clearTimeout(delay);
  }, []);

  return [isLoading, data];
}