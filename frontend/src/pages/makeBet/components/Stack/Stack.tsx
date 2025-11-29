import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"

const Stack = () => {
  const { register, formState: { errors } } = useFormContext()
  const { stack, deadLine } = errors

  return (
    <div>
      <p>stack</p>
      <Textarea
        {...register("stack", { required: true, minLength: 3 })}
        aria-invalid={stack ? "true" : "false"}
        placeholder="... o flašku Moetu, že Turek nakonec nebude ministr *"
      />
      {stack?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">stack is required</p>
      )}

      <p className="text-xs mt-4 text-gray-300">dead line</p>
      <Input
        {...register("deadLine", { required: true })}
        placeholder="... 30.1 o půlnoci"
      />
      {deadLine?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">stack is required</p>
      )}
    </div>
  )
}
export default Stack