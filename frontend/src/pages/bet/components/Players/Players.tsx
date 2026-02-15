import { Swords } from "lucide-react"
import type { ReactElement } from "react"

interface IProps {
  betTitle: string
  challengerName: string
  rivalName: string
}

interface IAvatarProps {
  color: string
  name: string
}

const Avatar = ({ color, name }: IAvatarProps): ReactElement => (
  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg border-2 border-navy-700 ${color}`}>
    {name.substring(0, 2).toUpperCase()}
  </div>
);

const Players = ({ betTitle, challengerName, rivalName }: IProps) => (
  <div className="bg-linear-to-b from-navy-700/50 to-navy-800 p-8 pb-12 text-center">
    <h1 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
      {betTitle}
    </h1>

    <div className="flex justify-center items-center gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-2 w-1/3">
        <Avatar color="bg-sky-600" name={challengerName} />
        <p className="font-bold text-sky-400 truncate w-full">{challengerName}</p>
        <span className="text-xs text-navy-500">Vyzyvatel</span>
      </div>

      <div className="flex flex-col items-center justify-center animate-pulse">
        <Swords className="w-10 h-10 text-amber-400 mb-1" />
        <span className="text-2xl font-black text-navy-500 italic opacity-50">VS</span>
      </div>

      <div className="flex flex-col items-center gap-2 w-1/3">
        <Avatar color="bg-rose-600" name={rivalName} />
        <p className="font-bold text-rose-400 truncate w-full">{rivalName}</p>
        <span className="text-xs text-navy-500">Oponent</span>
      </div>
    </div>
  </div>
)
export default Players