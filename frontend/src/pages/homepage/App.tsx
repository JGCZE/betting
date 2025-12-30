import { type ReactElement } from "react";
import Top10NewestBets from "./components/Top10NewestBets";

const App = (): ReactElement => {

  return (
    <div className="">
      Hello world
      <p className="text-blue-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!
      </p>

      <Top10NewestBets />
    </div>
  )
}

export default App;
