import clsx from "clsx";

interface IProps {
  title: string;
  type: "Challenger" | "Rival";
}

const playerStyle = "rounded-full border-2 size-14 flex items-center justify-center font-bold text-xl";

const Player = ({ title, type }: IProps) => (
  <div className="flex flex-col items-center gap-4">
    <h4 className="text-gray-400">
      {type}
    </h4>

    <span className={clsx(playerStyle, type === "Rival" ?
      "bg-red-500 border-2 border-red-700 opacity-70"
      :
      "bg-green-600 border-2 border-green-500 opacity-70")}
    >
      {title.slice(0, 2)}
    </span>

    <p className="">
      {title}
    </p>
  </div>
);

export default Player