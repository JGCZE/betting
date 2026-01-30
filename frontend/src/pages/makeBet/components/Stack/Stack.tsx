import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Category } from "./components"

const Stakes = () => {
  const { formState: { errors }, register } = useFormContext()
  const { stack } = errors

  return (
    <div>
      <p className="mb-4">Sázka</p>

      <p className="text-xs mb-2 text-gray-300">název sázky</p>
      <Input
        {...register("betTitle", { minLength: 3 })}
        className="mb-4"
        placeholder="Running challange 2026"
      />

      <p className="text-xs mb-2 text-gray-300">výhra</p>
      <Input
        {...register("stake", { minLength: 3, required: true })}
        className="mb-4"
        placeholder="flaška Moetu"
      />

      <Category />

      <p className="text-xs mb-2 text-gray-300">detail sázky</p>
      <Textarea
        {...register("description", { minLength: 3 })}
        aria-invalid={stack ? "true" : "false"}
        className="pb-14"
        // todo: random generovaný vtipný placeholdry 
        placeholder="... vsázíme se že do konce roku 2026 uběhnu marathon pod 4 hodiny v papučích a kostýmu mušketýra*"
      />

      {stack?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">stack is required</p>
      )}
    </div>
  )
}
export default Stakes;
