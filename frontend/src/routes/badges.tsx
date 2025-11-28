import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/badges')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/badges"!</div>
}
