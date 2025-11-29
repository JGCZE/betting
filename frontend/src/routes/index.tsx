import { createFileRoute } from '@tanstack/react-router'
import { App } from '../pages'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <App />
}
