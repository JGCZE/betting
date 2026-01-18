import { Clock } from "lucide-react"

interface IProps {
  challengerName: string
  createdAt: string
  deadline: number
  description: string
  progressPercent: number
  rivalName: string
  timeLeft: number
}

const DetailSection = ({
  challengerName, createdAt, deadline, description, progressPercent, rivalName, timeLeft,
}: IProps) => (
  <div className="p-8 pt-6 space-y-8">

    {/* Popis */}
    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {description || "Bez popisu."}
      </p>
    </div>

    {/* Timeline / Progress */}
    <div>
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>Start: {new Date(createdAt).toLocaleDateString()}</span>
        <span className="flex items-center gap-1 text-white font-bold">
          <Clock className="w-3 h-3" />
          {timeLeft > 0 ? `${timeLeft} dní do konce` : 'Konec'}
        </span>
      </div>
      {/* Progress Bar Container */}
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-right text-xs text-gray-500 mt-1">
        Deadline: <span className="text-gray-300">{deadline}</span>
      </p>
    </div>

    {/* Social / Prediction (Fake data pro ukázku) */}
    <div className="border-t border-gray-700 pt-6">
      <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Hlas lidu (Kdo vyhraje?)</h3>
      <div className="flex items-center gap-2 mb-2">
        {/* Hlasovací tlačítka */}
        <button className="flex-1 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800/50 rounded-lg p-2 text-xs text-blue-200 transition">
          Hlasovat pro {challengerName}
        </button>
        <button className="flex-1 bg-red-900/30 hover:bg-red-900/50 border border-red-800/50 rounded-lg p-2 text-xs text-red-200 transition">
          Hlasovat pro {rivalName}
        </button>
      </div>
      {/* Visual Bar */}
      <div className="flex h-2 rounded-full overflow-hidden">
        <div className="bg-blue-500 w-[65%]"></div>
        <div className="bg-red-500 w-[35%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-gray-500 mt-1">
        <span>65% věří {challengerName}</span>
        <span>35% věří {rivalName}</span>
      </div>
    </div>

  </div>
)

export default DetailSection