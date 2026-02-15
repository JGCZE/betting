import clsx from "clsx";

interface IProps {
  title: string;
  type: "Challenger" | "Rival";
}

const playerStyle =
  "rounded-full size-14 flex items-center justify-center font-semibold text-lg border";

const Player = ({ title, type }: IProps) => (
  <div className="flex flex-col items-center gap-4">
    <h4 className="text-navy-400">
      {type}
    </h4>

    <span className={clsx(playerStyle, type === "Rival"
      ? "bg-red-primary/25 border-red-primary"
      : "bg-green-primary/25 border-green-darker")}
    >
      {title.slice(0, 2)}
    </span>

    <p className="">
      {title}
    </p>
  </div>
);

export default Player