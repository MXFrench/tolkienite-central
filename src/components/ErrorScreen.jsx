const ErrorScreen = ({ message = "Something went wrong. Please try again later." }) => {
  return (
    <div className="grid place-content-center h-screen">
      <p className="text-xl font-bold italic animate-pulse">{message}</p>
    </div>
  )
}

export default ErrorScreen