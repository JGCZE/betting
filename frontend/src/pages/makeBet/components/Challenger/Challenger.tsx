import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const Challenger = () => {
  const { formState: { errors }, register } = useFormContext()
  const { challengerEmail, challengerName } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-red-400">Vyzyvatel</label>
      <Input
        {...register("challengerName", { minLength: 3, required: true })}
        aria-invalid={challengerName ? "true" : "false"}
        placeholder="challanger name *"
      />

      {challengerName?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">first name is required</p>
      )}

      <Input
        {...register("challengerEmail",
          { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, required: true })
        }
        aria-invalid={challengerEmail ? "true" : "false"}
        placeholder="email *"
      />

      {challengerEmail?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">email is required</p>
      )}
    </div>
  )
}

export default Challenger;
