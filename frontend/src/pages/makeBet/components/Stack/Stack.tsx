import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Stack = () => {
  const { formState: { errors }, register } = useFormContext()
  const { stack } = errors

  return (
    <div>
      <p>Sázka</p>

      <p className="text-xs my-4 text-gray-300">název sázky</p>
      <Input
        {...register("betTitle", { minLength: 3 })}
        className="mb-4"
        placeholder="Running challange 2026"
      />

      <p className="text-xs mb-4 text-gray-300">popis sázky</p>
      <Textarea
        {...register("stack", { minLength: 3, required: true })}
        aria-invalid={stack ? "true" : "false"}
        className="pb-14"
        // todo random generovaný vtipný placeholdry 
        placeholder="... o flašku Moetu, že do konce roku 2026 uběhnu marathon pod 4 hodiny v papučích *"
      />
      {stack?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">stack is required</p>
      )}
    </div>
  )
}
export default Stack
