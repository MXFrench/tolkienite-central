import { useState } from 'react'
import { NavLink } from 'react-router';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { PAGES } from '../lib/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    ...PAGES,
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 h-screen w-screen z-20 bg-nav-bg grid place-content-center"
          onClick={() => setIsOpen(false)}
        >
          <ul className='flex flex-col gap-4 items-center'>
            {navLinks.map(({id, name, path}) => (
              <li key={id} className='text-2xl sm:text-4xl font-thin p-4 rounded hover:bg-nav-highlight transition cursor-pointer text-nav-link'>
                <NavLink to={path}
                  className={({ isActive }) => isActive ? "font-semibold" : undefined}
                >{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className='fixed z-30 top-4 right-4 size-12 bg-bg-secondary rounded-full text-2xl flex items-center justify-center cursor-pointer hover:shadow-lg transition'
        onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>
    </>
  )
}

export default Navigation