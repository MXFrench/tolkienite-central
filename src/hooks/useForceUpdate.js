import { useState } from "react"

export default function useForceUpdate () {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return () => setToggle(toggle => !toggle);
}