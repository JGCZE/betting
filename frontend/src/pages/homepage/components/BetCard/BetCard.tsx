import type { ReactElement } from "react";
import clsx from "clsx";
import { Player } from "@/components/shared";
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
  <div className="flex justify-between items-center">
    <span className="text-sm text-navy-400">{label}:</span>

    <span className={clsx("font-medium text-right truncate ml-2", className)}>
      {value}
    </span>
  </div>
);

const BetCard = ({ bet }: IProps) => {
  const { betTitle, challengerName, deadline, rivalName, stake } = bet;

  return (
    <Card className="h-full py-3 px-5 flex flex-col text-sm">
      <h3 className="font-bold line-clamp-2">
        {betTitle}
      </h3>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex justify-between items-center px-8 mb-2">
          <Player title={challengerName} type="Challenger" />

          <p className="">VS</p>

          <Player title={rivalName} type="Rival" />
        </div>

        <InfoRow
          className="bg-navy-800 text-green-primary border border-navy-700 px-3 py-1 rounded-md text-sm"
          label="Stake"
          value={stake}
        />

        <InfoRow
          className="bg-navy-800 text-red-primary/80 border border-navy-700 px-3 py-1 rounded-md text-sm"
          label="Exp"
          value={deadline}
        />
      </div>
    </Card>
  );
};

export default BetCard;
