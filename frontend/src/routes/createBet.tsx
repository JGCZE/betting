import { createFileRoute } from '@tanstack/react-router'
import { MakeBet } from '../pages'

export const Route = createFileRoute('/createBet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MakeBet />
}
