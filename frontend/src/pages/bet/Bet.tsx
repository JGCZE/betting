import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import useBetApi from './api/useBetApi';

const Bet = ({ betUrl }: { betUrl: string }) => {
  const { data, isError, isLoading } = useBetApi(betUrl)

  if (isLoading) {
    return <div className="p-8 text-center">Načítám detaily sázky...</div>
  }

  if (isError || !data) {
    return (
      <div className="p-8 text-center text-red-500">
        Sázka nalezena. Asi ji někdo smazal nebo je špatný odkaz.
        <br />
        <Link className="text-blue-500 underline mt-4 block" to="/">Zpět na přehled</Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Tlačítko zpět */}
      <Link className="inline-flex items-center text-gray-400 hover:text-white transition-colors" to="/">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zpět na seznam
      </Link>

      {/* Hlavní karta detailu */}
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-2">{data.betTitle}</h1>

        <div className="flex justify-between items-center text-sm text-gray-400 mb-8">
          <span>Vytvořeno: {new Date(data.createdAt).toLocaleDateString('cs-CZ')}</span>
          <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs border border-blue-700">
            {data.visibility}
          </span>
        </div>

        <div className="space-y-6">
          {/* Vyzývatel vs Soupeř */}
          <div className="grid grid-cols-2 gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-700">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Vyzývatel</p>
              <p className="text-lg font-semibold text-blue-400">{data.challengerName}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase font-bold">Soupeř</p>
              <p className="text-lg font-semibold text-red-400">{data.rivalName}</p>
            </div>
          </div>

          {/* O co se sází */}
          <div>
            <h3 className="text-gray-400 font-medium mb-1">O co se sází?</h3>
            <p className="text-xl text-white font-serif italic">"{data.stake}"</p>
          </div>

          {/* Popis - tady může být dlouhý text */}
          <div>
            <h3 className="text-gray-400 font-medium mb-1">Popis sázky</h3>
            <p className="text-gray-300 leading-relaxed">
              {data.description || "Bez popisu."}
            </p>
          </div>

          {/* Deadline */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-center text-sm text-gray-500">
              Konec sázky: <span className="text-white font-bold">{data.deadline}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bet