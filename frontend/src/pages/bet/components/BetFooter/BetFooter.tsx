import { CheckCircle2, MessageSquare, ThumbsUp } from "lucide-react"

const BetFooter = () => (
  <div className="bg-gray-900 p-4 border-t border-gray-700 flex justify-around">
    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
      <MessageSquare className="w-5 h-5" />
      <span className="text-[10px]">Trash Talk (3)</span>
    </button>

    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
      <ThumbsUp className="w-5 h-5" />
      <span className="text-[10px]">Lajkovat</span>
    </button>

    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-400 transition">
      <CheckCircle2 className="w-5 h-5" />
      <span className="text-[10px]">Vyhodnotit</span>
    </button>
  </div>
)


export default BetFooter