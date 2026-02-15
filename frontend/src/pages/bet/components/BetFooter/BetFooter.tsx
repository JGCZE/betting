import { CheckCircle2, MessageSquare, ThumbsUp } from "lucide-react"

const BetFooter = () => (
  <div className="bg-navy-950 p-4 border-t border-navy-700 flex justify-around">
    <button className="flex flex-col items-center gap-1 text-navy-400 hover:text-white transition">
      <MessageSquare className="w-5 h-5" />
      <span className="text-[10px]">Trash Talk (3)</span>
    </button>

    <button className="flex flex-col items-center gap-1 text-navy-400 hover:text-white transition">
      <ThumbsUp className="w-5 h-5" />
      <span className="text-[10px]">Lajkovat</span>
    </button>

    <button className="flex flex-col items-center gap-1 text-navy-400 hover:text-emerald-400 transition">
      <CheckCircle2 className="w-5 h-5" />
      <span className="text-[10px]">Vyhodnotit</span>
    </button>
  </div>
)


export default BetFooter