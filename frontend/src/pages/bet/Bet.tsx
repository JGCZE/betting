import { Link } from '@tanstack/react-router';
import {
  ArrowLeft, Clock, MessageSquare, ThumbsUp,
  Swords, Trophy, AlertTriangle, CheckCircle2
} from 'lucide-react';
import useBetApi from './api/useBetApi';

// Pomocná komponenta pro Avatara (placeholder)
const Avatar = ({ name, color }: { name: string, color: string }) => (
  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg border-2 border-gray-700 ${color}`}>
    {name.substring(0, 2).toUpperCase()}
  </div>
);

const Bet = ({ betUrl }: { betUrl: string }) => {
  const { data, isError, isLoading } = useBetApi(betUrl)

  if (isLoading) return <div className="p-8 text-center text-gray-400 animate-pulse">Načítám arénu...</div>

  if (isError || !data) {
    return (
      <div className="p-8 text-center text-red-500">
        <AlertTriangle className="mx-auto h-12 w-12 mb-4 opacity-50" />
        Sázka nenalezena.
        <Link className="text-blue-500 underline mt-4 block" to="/">Zpět na přehled</Link>
      </div>
    )
  }

  // Výpočet procenta pro časový progress bar (jen jako příklad)
  const now = new Date().getTime();
  const created = new Date(data.createdAt).getTime();
  const deadline = new Date(data.deadline).getTime(); // Předpoklad: deadline je parsovatelný string
  const totalDuration = deadline - created;
  const elapsed = now - created;
  const progressPercent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  const timeLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24)); // Dny do konce

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">

      {/* Navigace */}
      <Link className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-4" to="/">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zpět do lobby
      </Link>

      {/* Hlavní Karta */}
      <div className="bg-gray-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl relative">

        {/* Status Badge (Absolutní pozice nahoře) */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${timeLeft > 0 ? 'bg-green-900/50 text-green-400 border-green-700' : 'bg-red-900/50 text-red-400 border-red-700'
            }`}>
            {timeLeft > 0 ? 'AKTIVNÍ' : 'EXPIRUJE'}
          </span>
        </div>

        {/* 1. SEKVENCE: VERSUS MODE */}
        <div className="bg-gradient-to-b from-gray-700/50 to-gray-800 p-8 pb-12 text-center">
          <h1 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
            {data.betTitle}
          </h1>

          <div className="flex justify-center items-center gap-4 md:gap-8">
            {/* Challenger */}
            <div className="flex flex-col items-center gap-2 w-1/3">
              <Avatar name={data.challengerName} color="bg-blue-600" />
              <p className="font-bold text-blue-400 truncate w-full">{data.challengerName}</p>
              <span className="text-xs text-gray-500">Vyzývatel</span>
            </div>

            {/* VS Ikona */}
            <div className="flex flex-col items-center justify-center animate-pulse">
              <Swords className="w-10 h-10 text-yellow-500 mb-1" />
              <span className="text-2xl font-black text-gray-600 italic opacity-50">VS</span>
            </div>

            {/* Rival */}
            <div className="flex flex-col items-center gap-2 w-1/3">
              <Avatar name={data.rivalName} color="bg-red-600" />
              <p className="font-bold text-red-400 truncate w-full">{data.rivalName}</p>
              <span className="text-xs text-gray-500">Oponent</span>
            </div>
          </div>
        </div>

        {/* 2. SEKVENCE: O CO JDE (Stake) */}
        <div className="px-8 -mt-6 relative z-10 text-center">
          <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-lg inline-block min-w-[200px]">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Hraje se o</p>
            <div className="flex items-center justify-center gap-2 text-yellow-400 font-serif text-xl">
              <Trophy className="w-5 h-5" />
              <span className="font-bold italic">"{data.stake}"</span>
            </div>
          </div>
        </div>

        {/* 3. SEKVENCE: DETAILY A ČAS */}
        <div className="p-8 pt-6 space-y-8">

          {/* Popis */}
          <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {data.description || "Bez popisu."}
            </p>
          </div>

          {/* Timeline / Progress */}
          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Start: {new Date(data.createdAt).toLocaleDateString()}</span>
              <span className="flex items-center gap-1 text-white font-bold">
                <Clock className="w-3 h-3" />
                {timeLeft > 0 ? `${timeLeft} dní do konce` : 'Konec'}
              </span>
            </div>
            {/* Progress Bar Container */}
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">
              Deadline: <span className="text-gray-300">{data.deadline}</span>
            </p>
          </div>

          {/* Social / Prediction (Fake data pro ukázku) */}
          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase">Hlas lidu (Kdo vyhraje?)</h3>
            <div className="flex items-center gap-2 mb-2">
              {/* Hlasovací tlačítka */}
              <button className="flex-1 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800/50 rounded-lg p-2 text-xs text-blue-200 transition">
                Hlasovat pro {data.challengerName}
              </button>
              <button className="flex-1 bg-red-900/30 hover:bg-red-900/50 border border-red-800/50 rounded-lg p-2 text-xs text-red-200 transition">
                Hlasovat pro {data.rivalName}
              </button>
            </div>
            {/* Visual Bar */}
            <div className="flex h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 w-[65%]"></div>
              <div className="bg-red-500 w-[35%]"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>65% věří {data.challengerName}</span>
              <span>35% věří {data.rivalName}</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
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

      </div>
    </div>
  )
}
export default Bet