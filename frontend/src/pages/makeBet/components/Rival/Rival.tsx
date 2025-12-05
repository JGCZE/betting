import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

const Rival = () => {
  const { register, formState: { errors } } = useFormContext()
  const { rival_name, rival_email } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-green-400">Rival</label>
      <Input
        {...register("rival_name", { required: true, minLength: 3 })}
        aria-invalid={rival_name ? "true" : "false"}
        placeholder="rival name *"
      />

      {rival_name?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">first name is required</p>
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
