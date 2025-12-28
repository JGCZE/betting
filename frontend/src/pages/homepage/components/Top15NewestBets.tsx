import useTop15NewestBetsApi from "../api/useTop15NewestBetsApi"

const Top15NewestBets = () => {
  const { data } = useTop15NewestBetsApi()

  console.log("data from Top15NewestBets: ", data)

  return (
    <div>Top15NewestBets

    </div>
  )
}

export default Top15NewestBets
