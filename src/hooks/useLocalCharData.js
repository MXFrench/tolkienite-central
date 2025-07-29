import { useEffect, useState } from "react";
import { fetchData } from "../lib/lib";

const DATA_NAME = "characterData";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchData("/character");
      const docs = data?.docs;
      const characters = docs.map(({ _id, name}) => ({_id, name}));
      localStorage.setItem(DATA_NAME, JSON.stringify(characters));
      setIsLoading(false);
    }
    const characterData = localStorage.getItem(DATA_NAME);

    if (!characterData) {
      loadData();
    }
    setValue(JSON.parse(characterData));
  }, []);

  return { characterDocs: value, loadingDocs: isLoading };
}