import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"

const Rival = () => {
  const { formState: { errors }, register } = useFormContext()
  const { rival_email, rival_name } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-green-400">Rival</label>
      <Input
        {...register("rival_name", { minLength: 3, required: true })}
        aria-invalid={rival_name ? "true" : "false"}
        placeholder="rival name *"
      />

      {rival_name?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">first name is required</p>
      )}

      <Input
        {...register("rival_email",
          { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ })
        }
        aria-invalid={rival_email ? "true" : "false"}
        placeholder="email"
      />
    </div>
  )
}
export default Rival
