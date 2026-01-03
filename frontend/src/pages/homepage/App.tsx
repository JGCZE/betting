import { type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import AllBets from "./components/AllBets";

const App = (): ReactElement => {

  return (
    <div className="">
      Hello world
      <p className="text-blue-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!
      </p>

      {/* // todo: komponenta + logika */}
      <div className="border-2 my-4 py-4">
        <p>filtrovat</p>

        <div className="flex gap-4">
          <Button>od nejnovějších</Button>
          <Button>hodnota</Button>
          <Button>od nejnovějších</Button>
        </div>
      </div>

      <h2 className="font-bold text-2xl">Areny</h2>

      <AllBets />
    </div>
  )
}

export default App;
