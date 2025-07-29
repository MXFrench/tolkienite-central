import { randInt } from "./utilities";

export function getRandomQuotePath () {
  const totalNum = 2384;
  const chosenNum = randInt(0, totalNum -1);
  return `/quote?offset=${chosenNum}&limit=1`;
}

const apiBaseUrl = "https://the-one-api.dev/v2";
const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchData (path) {
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
    return data;
  } catch (error) {
    console.error("Something went wrong while fetching data: ", error);
  }
}

export function getNameById (id, docs) {
  const getById = docs.filter(({ _id }) => id === _id);
  const name = getById[0].name;
  return name;
}