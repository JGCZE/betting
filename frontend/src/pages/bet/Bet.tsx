import { Link } from '@tanstack/react-router';
import {
  AlertTriangle,
} from 'lucide-react';
import useBetApi from './api/useBetApi';
import { BackToLobby, Badge, BetFooter, DetailSection, Players, Stake } from './components';


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

      <BackToLobby />

      <div className="bg-gray-800 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl relative">
        <Badge
          timeLeft={timeLeft}
        />

        <Players
          betTitle={data.betTitle}
          challengerName={data.challengerName}
          rivalName={data.rivalName}
        />

        <Stake
          stake={data.stake}
        />

        <DetailSection
          challengerName={data.challengerName}
          createdAt={data.createdAt}
          deadline={deadline}
          description={data.description}
          progressPercent={progressPercent}
          rivalName={data.rivalName}
          timeLeft={timeLeft}
        />

        <BetFooter />
      </div>
    </div>
  )
}
export default Bet