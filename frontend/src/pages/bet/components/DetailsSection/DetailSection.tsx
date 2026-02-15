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
    <div className="bg-navy-950/50 rounded-lg p-4 border border-navy-700/50">
      <p className="text-navy-300 leading-relaxed text-sm md:text-base">
        {description || "Bez popisu."}
      </p>
    </div>

    {/* Timeline / Progress */}
    <div>
      <div className="flex justify-between text-xs text-navy-400 mb-2">
        <span>Start: {new Date(createdAt).toLocaleDateString()}</span>
        <span className="flex items-center gap-1 text-white font-bold">
          <Clock className="w-3 h-3" />
          {timeLeft > 0 ? `${timeLeft} dní do konce` : 'Konec'}
        </span>
      </div>
      {/* Progress Bar Container */}
      <div className="h-3 bg-navy-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-sky-500 to-indigo-500 transition-all duration-1000"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-right text-xs text-navy-500 mt-1">
        Deadline: <span className="text-navy-300">{deadline}</span>
      </p>
    </div>

    {/* Social / Prediction (Fake data pro ukázku) */}
    <div className="border-t border-navy-700 pt-6">
      <h3 className="text-sm font-bold text-navy-400 mb-3 uppercase">Hlas lidu (Kdo vyhraje?)</h3>
      <div className="flex items-center gap-2 mb-2">
        {/* Hlasovací tlačítka */}
        <button className="flex-1 bg-sky-900/30 hover:bg-sky-900/50 border border-sky-800/50 rounded-lg p-2 text-xs text-sky-200 transition">
          Hlasovat pro {challengerName}
        </button>
        <button className="flex-1 bg-rose-900/30 hover:bg-rose-900/50 border border-rose-800/50 rounded-lg p-2 text-xs text-rose-200 transition">
          Hlasovat pro {rivalName}
        </button>
      </div>
      {/* Visual Bar */}
      <div className="flex h-2 rounded-full overflow-hidden">
        <div className="bg-sky-500 w-[65%]"></div>
        <div className="bg-rose-500 w-[35%]"></div>
      </div>
      <div className="flex justify-between text-[10px] text-navy-500 mt-1">
        <span>65% věří {challengerName}</span>
        <span>35% věří {rivalName}</span>
      </div>
    </div>

  </div>
)

export default DetailSection
