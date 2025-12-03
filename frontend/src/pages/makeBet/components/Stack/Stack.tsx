import { useFormContext } from "react-hook-form"
import { Textarea } from "../../../../components/ui/textarea"
import Input from "../../../../components/ui/input"

const Stack = () => {
  const { register, formState: { errors } } = useFormContext()
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
        {...register("stack", { required: true, minLength: 3 })}
        className="pb-14"
        aria-invalid={stack ? "true" : "false"}
        // todo random generovaný vtipný placeholdry 
        placeholder="... o flašku Moetu, že do konce roku 2026 uběhnu marathon pod 4 hodiny v papučích *"
      />
      {stack?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">stack is required</p>
      )}
    </div>
  )
}
export default Stack
