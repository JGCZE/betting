import { type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import AllBets from "./components/AllBets";

const App = (): ReactElement => {

  return (
    <div className="w-full">

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
