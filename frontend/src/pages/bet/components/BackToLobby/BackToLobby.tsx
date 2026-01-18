import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"

const BackToLobby = () => (
  <>
    <Link className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-4" to="/">
      <ArrowLeft className="w-4 h-4 mr-2" />
      Zpět do lobby
    </Link>
  </>
)

export default BackToLobby