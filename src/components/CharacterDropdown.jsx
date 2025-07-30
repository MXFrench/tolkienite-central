import { useEffect, useState, useRef } from 'react'
import useLocalCharData from '../hooks/useLocalCharData';
import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';

const CharacterDropdown = ({ setVal, curVal}) => {
  const { characterDocs, loadingDocs } = useLocalCharData();
  const [listItems, setListItems] = useState([]);
  useEffect(() => { setListItems(characterDocs) }, [characterDocs]);

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    setVal("");
  }, []);

  function sortList (sortTerm) {
    const sortedList = characterDocs?.filter(char => char.name.toLowerCase().includes(sortTerm.toLowerCase()));
    setListItems(sortedList);
  }

  useDebounce(() => sortList(input), 500, [input]);

  function handleInput (e) {
    setInput(e.target.value);
  }

  function chooseItem (id, name) {
    setIsOpen(false);
    setVal(id);
    setInput(name);
  }

  return (
    <div ref={ref} className='relative'>
      <input type="text"
        placeholder='Choose or search name...'
        onFocus={() => setIsOpen(true)}
        onInput={handleInput}
        value={input}
        className="py-2 px-3 border-2 border-primary w-full rounded outline-0 focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 transition cursor-pointer"
      />
      {isOpen && (
        <ul className='max-h-40 overflow-y-scroll shadow-lg rounded-md border border-black/15 absolute bg-bg-secondary w-full'>
          {loadingDocs ? (
            <li>Loading...</li>
          ) : listItems?.map(({ _id, name}) => (
            <li key={_id}>
              <button onClick={() => chooseItem(_id, name)}
                className={`px-2 py-1 hover:bg-black/10 w-full text-left cursor-pointer ${_id === curVal && "bg-black/5"}`}
              >{name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CharacterDropdown