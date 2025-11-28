import { createFileRoute } from '@tanstack/react-router'
import App from '../pages/homepage/App'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return  <App />
}
