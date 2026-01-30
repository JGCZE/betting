import type { ReactElement } from "react";
import clsx from "clsx";
import Card from "@/components/ui/card";
import type { TAllBets } from "../../api/useAllBetsApi";

interface IProps {
  bet: TAllBets;
}

interface IInfoRowProps {
  className?: string;
  label: string;
  value: number | string;
}

const InfoRow = ({ className, label, value }: IInfoRowProps): ReactElement => (
  <div className="flex justify-between items-center border-gray-100">
    <span className="text-sm text-gray-400">{label}:</span>

    <span className={clsx("font-medium text-right truncate ml-2", className)}>
      {value}
    </span>
  </div>
);

const BetCard = ({ bet }: IProps) => {
  const { betTitle, challengerName, deadline, rivalName, stake } = bet;

  return (
    <Card className="h-full px-6 py-4 flex flex-col">
      <h3 className="font-bold text-lg leading-tight line-clamp-2 h-12">
        {betTitle}
      </h3>

      <div className="mt-6 flex flex-col gap-1">
        <InfoRow label="Vyzyvatel" value={challengerName} />
        <InfoRow label="Rival" value={rivalName} />
        <InfoRow className="bg-green-500 text-black py-0.5 px-3" label="Stake" value={stake} />
        <InfoRow className="bg-red-400 text-black py-0.5 px-3" label="Exp" value={deadline} />
      </div>
    </Card>
  );
};

export default BetCard;
