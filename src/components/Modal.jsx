import { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside';

const Modal = ({ children, closeModal, size }) => {
  const contentRef = useRef();
  useClickOutside(contentRef, (e) => {
    if (e.target.classList.contains("openBtn")) return;
    closeModal();
  });
  const sizeClass = size === "sm" ? "max-w-100" : "w-full";

  return (
    <div className='fixed w-screen h-screen inset-0 bg-black/5 backdrop-blur-xs grid place-content-center z-100 px-4'>
      <div ref={contentRef} className={`${sizeClass} mx-auto xs:p-8 p-4 rounded-lg bg-bg-secondary`}>
        {children}
      </div>
      <button onClick={closeModal} className='mt-2 text-white cursor-pointer'>Close</button>
    </div>
  )
}

export default Modal