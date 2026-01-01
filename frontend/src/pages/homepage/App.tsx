import { type ReactElement } from "react";
import AllBets from "./components/Allbets";

const App = (): ReactElement => {

  return (
    <div className="">
      Hello world
      <p className="text-blue-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!
      </p>

      <AllBets />
    </div>
  )
}

export default App;
