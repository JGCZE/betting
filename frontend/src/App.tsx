import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, type ReactElement } from "react";

const App = (): ReactElement => {
  const [fetchedData, setData] = useState([])

  const getMockData = async () => {
    try {
      const response = await fetch("http://localhost:5001/")

      if (!response.ok) {
        throw new Error("fail to fetch")
      }

      const data = await response.json()

      console.log(">>", data)
      setData(data)

      return data
    } catch (error) {
      console.error("XXXXXX", error)
    }
  }

  const { data, isError } = useQuery({ queryKey: ['todos'], queryFn: getMockData })

  console.log("isError::", isError)
  console.log("data::", data)

  return (
    <div className="text-red-400">
      Hello world
      {fetchedData.map((data) => <p>{data.name}</p>)}
    </div>
  )
}
export default App;