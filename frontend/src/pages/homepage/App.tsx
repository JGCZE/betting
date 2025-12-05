import { type ReactElement } from "react";
import Top15NewestBets from "./components/Top15NewestBets";

const App = (): ReactElement => {
  return (
    <div>
      Hello world
      <p className="text-blue-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque consectetur culpa
        ullam voluptatum saepe necessitatibus magni, expedita deleniti veniam exercitationem
        voluptatibus fugiat similique, sed nam magnam illo, omnis eos!
      </p>
    
      <Top15NewestBets />
    </div>
  )
}
export default App;
