import { useCallback, useEffect, useState } from "react";
import { randArr } from "../lib/utilities";
import useFetch from "./useFetch";
import { useSearchParams } from "react-router";

const apiBaseUrl = "https://the-one-api.dev/v2";
const apiKey = import.meta.env.VITE_API_KEY;
const options = { headers: { "Authorization": `Bearer ${apiKey}` } };

export default function useGetQuote(reset) {
  const [searchParams] = useSearchParams();

  const [quote, setQuote] = useState({});

  // const endpoint = type === "random" ? "quote" : `${type}/${id}/quote`;
  const endpoint = "/quote";
  const url = `${apiBaseUrl}/${endpoint}`;

  const { loading, error, value } = useFetch( url, options );

  const setRandomQuote = useCallback(() => {
    if (!value) return;

    const type = searchParams.get("type");
    const id = searchParams.get("id");

    console.log(type, id);
    // const docs = type === "random" ? value?.docs : value?.docs?.filter(doc => doc[type] === id);

    const randQuote = randArr(value?.docs);
    setQuote(randQuote);
  }, [value]);

  useEffect(() => {
    setRandomQuote();
  }, [setRandomQuote, reset]);

  return { loading, error, quote };
}