import { Link } from "@tanstack/react-router"
import Card from "@/components/ui/card"
import useTop10NewestBetsApi from "../api/useTop10NewestBetsApi"

const Top10NewestBets = () => {
  const { data, isLoading } = useTop10NewestBetsApi();

  console.log("data from Top15NewestBets: ", data)

  const formatDescription = (description: string) => {
    if (description.length > 120) {
      return description.slice(0, 120) + '...';
    }
    return description;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center flex-wrap mt-10">
      {data?.map(((bet, index) => {
        const { betTitle, betUrl, challanger_name, deadline, description, rival_name, stake } = bet;

        return (
          <Link params={{ betUrl }} to="/bets/$betUrl">
            <Card className="p-4 lg:w-[360px] xl:w-[460px] border rounded flex flex-col" key={index}>
              <h3 className="font-bold mb-2">{betTitle}</h3>
              <span>Vyzyvatel: {challanger_name} </span>
              <span>Rival: {rival_name}</span>
              <span>stake: {stake}</span>

              <span>desc: {formatDescription(description)}</span>

              <span>exp: {deadline}</span>
            </Card>
          </Link>
        )
      }))}
    </div>
  )
}

export default Top10NewestBets;
