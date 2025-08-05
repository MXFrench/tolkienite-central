import { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside';

const Modal = ({ children, closeModal, size = "default" }) => {
  const contentRef = useRef();
  useClickOutside(contentRef, (e) => {
    if (e.target.classList.contains("openBtn")) return;
    closeModal();
  });
  const sizes = {
    xs: "max-w-80",
    sm: "max-w-100",
    md: "max-w-200",
    lg: "max-w-300",
    xl: "max-w-400",
    default: "w-full",
  }
  const sizeClass = sizes[size];

  return (
    <div className='fixed w-screen h-screen inset-0 bg-black/5 backdrop-blur-xs grid justify-center z-100 py-8 px-4 overflow-y-auto'>
      <div ref={contentRef} className={`${sizeClass} mx-auto xs:p-8 p-4 rounded-lg bg-bg-secondary`}>
        {children}
      </div>
      <button onClick={closeModal} className='mt-2 text-white cursor-pointer'>Close</button>
    </div>
  )
}

export default Modal