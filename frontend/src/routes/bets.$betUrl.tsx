import { createFileRoute } from '@tanstack/react-router'
import Bet from '@/pages/bet/Bet'

export const Route = createFileRoute('/bets/$betUrl')({
  component: RouteComponent,
})

function RouteComponent() {
  const { betUrl } = Route.useParams()

  return <Bet betUrl={betUrl} />
}
