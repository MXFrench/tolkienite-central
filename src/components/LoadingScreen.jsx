
import { LuLoaderCircle } from 'react-icons/lu'

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="grid place-content-center justify-items-center h-screen gap-2">
      <LuLoaderCircle className="size-8 lg:size-12 text-primary animate-spin" />
      <h3 className="text-primary text-xl lg:text-2xl font-bold">{message}</h3>
    </div>
  )
}

export default LoadingScreen