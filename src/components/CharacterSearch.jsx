import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { noSpace } from "../lib/utilities";

export const SEARCHBY = {
  NAME: "Name",
  RACE: "Race",
  REALM: "Realm",
}

const CharacterSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("value") ?? "");
  const [searchBy, setSearchBy] = useState(searchParams.get("searchBy") ?? "");

  const submitSearch = () => {
    if (!noSpace(search)) {
      alert("Please enter a search term.");
      setSearch("");
      return;
    };

    if (!searchBy) {
      alert("Please select a search by.");
      return;
    }
    setSearchParams({ searchBy: searchBy, value: search });
  }

  useEffect(() => {
    setSearch(searchParams.get("value"));
  }, [searchParams]);

  return (
    <div className='flex gap-2 max-sm:text-sm flex-wrap'>
      <input type="text"
        className='w-full border-2 border-borders focus:border-primary outline-0 transition hover:bg-bg-secondary/25 rounded-md py-2 px-3 xs:flex-1'
        placeholder='Search characters'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={(e) => {if (e.key === "Enter") submitSearch()} }
      />

      <select className="rounded-md py-2 px-3 bg-borders hover:shadow-md cursor-pointer transition whitespace-nowrap focus-visible:ring-2 focus-visible:ring-primary outline-0"
        value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
        <option value="" disabled>Search By</option>
        <option value={SEARCHBY.NAME}>{SEARCHBY.NAME}</option>
        <option value={SEARCHBY.RACE}>{SEARCHBY.RACE}</option>
        <option value={SEARCHBY.REALM}>{SEARCHBY.REALM}</option>
      </select>

      <button className="rounded-md py-2 px-3 bg-primary cursor-pointer hover:shadow-md transition text-btn-text focus-visible:ring-2 focus-visible:ring-primary/50 outline-0"
        onClick={submitSearch}
      >SEARCH</button>
    </div>
  )
}

export default CharacterSearch