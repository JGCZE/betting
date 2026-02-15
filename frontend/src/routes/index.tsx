import { createFileRoute } from '@tanstack/react-router'
import { App } from '../pages'

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: (search: Record<string, unknown>) => ({
    cat: (search.cat as string) || undefined,
  }),
})

function Index() {
  return <App />
}
