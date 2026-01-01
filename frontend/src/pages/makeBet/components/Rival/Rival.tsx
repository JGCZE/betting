import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"

const Rival = () => {
  const { formState: { errors }, register } = useFormContext()
  const { rivalEmail, rivalName } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-green-400">Rival</label>
      <Input
        {...register("rivalName", { minLength: 3, required: true })}
        aria-invalid={rivalName ? "true" : "false"}
        placeholder="rival name *"
      />

      {rivalName?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">first name is required</p>
      )}

      <Input
        {...register("rivalEmail",
          { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ })
        }
        aria-invalid={rivalEmail ? "true" : "false"}
        placeholder="email"
      />
    </div>
  )
}
export default Rival
