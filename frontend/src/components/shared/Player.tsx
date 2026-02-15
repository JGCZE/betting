import clsx from "clsx";

interface IProps {
  title: string;
  type: "Challenger" | "Rival";
}

const playerStyle =
  "rounded-full size-14 flex items-center justify-center font-semibold text-lg border";

const Player = ({ title, type }: IProps) => (
  <div className="flex flex-col items-center gap-4">
    <h4 className="text-gray-400">
      {type}
    </h4>

    <span className={clsx(playerStyle, type === "Rival"
      ? "bg-rose-500/15 border-rose-400 text-rose-300"
      : "bg-emerald-500/15 border-emerald-400 text-emerald-300")}
    >
      {title.slice(0, 2)}
    </span>

    <p className="">
      {title}
    </p>
  </div>
);

export default Player