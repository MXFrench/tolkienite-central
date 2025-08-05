import { RxExternalLink } from "react-icons/rx";
import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { MdMovieCreation } from "react-icons/md";
import Modal from "./Modal";
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const movieCardRef = useRef();
  useClickOutside(movieCardRef, () => setHovered(false));

  return (
    <>
      <div className="relative overflow-hidden rounded-md hover:shadow-2xl transition group" ref={movieCardRef}>
        <img className="cursor-pointer transition group-hover:scale-105" src={movie?.coverUrl} alt="movie-cover"
        onClick={() => setHovered(true)} />

        <div className={`absolute w-full h-full inset-0 transition translate-y-[75%] opacity-0 group-hover:translate-0 group-hover:opacity-100 ${hovered && "translate-0! opacity-100!"}`}>
          <div className="bg-bg-secondary/75 backdrop-blur-xs size-full p-6 grid place-content-center">
            <p className="text-text/75 text-sm">{movie?.series}</p>
            <h3 className="text-2xl font-bold">{movie?.name}</h3>
            <p className="italic my-4">{movie?.oneLine}</p>
            <p className="max-xs:line-clamp-6 sm:line-clamp-6">{movie?.summary}</p>
            <button type="button" className="openBtn xs:hidden sm:block place-self-end font-semibold cursor-pointer text-primary"
              onClick={() => setOpen(true)}
            >Read more...</button>

            <ul className="flex flex-col gap-2 mt-2">
              <li className="flex items-center gap-2">
                <FaImdb />
                <a href={movie?.imdbUrl} target="_blank" className="flex items-center gap-1">IMDB <RxExternalLink /></a>
              </li>
              <li className="flex items-center gap-2">
                <SiRottentomatoes />
                <a href={movie?.rtUrl} target="_blank" className="flex items-center gap-1">Rotten Tomatoes <RxExternalLink /></a>
              </li>
              <li className="flex items-center gap-2">
                <MdMovieCreation />
                <a href={movie?.tmdbUrl} target="_blank" className="flex items-center gap-1">TMDB <RxExternalLink /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {open && (
        <Modal closeModal={() => { if (open) setOpen(false) }} size="sm">
          <p>{movie?.summary}</p>
        </Modal>
      )}
    </>
  )
}

export default MovieCard