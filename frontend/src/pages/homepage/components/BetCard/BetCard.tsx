import Card from "@/components/ui/card";
import type { TAllBets } from "../../api/useAllBetsApi";

interface IProps {
  bet: TAllBets;
}

const InfoRow = ({ label, value }: { label: string, value: number | string }) => (
  <div className="flex justify-between items-center border-gray-100">
    <span className="text-sm text-gray-400">{label}:</span>

    <span className="font-medium text-right truncate ml-2">
      {value}
    </span>
  </div>
);

const BetCard = ({ bet }: IProps) => {
  const { betTitle, challengerName, deadline, rivalName, stake } = bet;

  return (
    <Card className="h-full px-6 py-4 flex flex-col">
      <h3 className="font-bold text-lg leading-tight line-clamp-2">
        {betTitle}
      </h3>

      <div className="mt-6 flex flex-col gap-1">
        <InfoRow label="Vyzyvatel" value={challengerName} />
        <InfoRow label="Rival" value={rivalName} />
        <InfoRow label="Stake" value={stake} />
        <InfoRow label="Exp" value={deadline} />
      </div>
    </Card>
  );
};

export default BetCard;
