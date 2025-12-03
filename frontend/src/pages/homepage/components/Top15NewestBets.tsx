import useTop15NewestBetsApi from "../api/useTop15NewestBetsApi"

const Top15NewestBets = () => {
  const { data } = useTop15NewestBetsApi()

  return (
    <div>Top15NewestBets
      {data?.map((bet) => (
        <div key={bet.id}>
          <p>{bet.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Top15NewestBets
