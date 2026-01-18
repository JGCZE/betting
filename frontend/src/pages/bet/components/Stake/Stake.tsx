import { Trophy } from "lucide-react"

interface IProps {
  stake: string
}

const Stake = ({ stake }: IProps) => (
  <div className="px-8 -mt-6 relative z-10 text-center">
    <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-lg inline-block min-w-[200px]">
      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Hraje se o</p>
      <div className="flex items-center justify-center gap-2 text-yellow-400 font-serif text-xl">
        <Trophy className="w-5 h-5" />
        <span className="font-bold italic">"{stake}"</span>
      </div>
    </div>
  </div>
)
export default Stake