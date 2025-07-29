import useFetchData from "../hooks/useFetchData";
import { getRandomQuotePath } from "../lib/lib";


const QuoteGenerator = () => {
  const path = getRandomQuotePath();
  const [isLoading, data] = useFetchData(path);
  
  if (isLoading) return "Loading..."

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default QuoteGenerator