import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

const Challanger = () => {
  const { formState: { errors }, register } = useFormContext()
  const { challanger_email, challanger_name } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-red-400">Vyzyvatel</label>
      <Input
        {...register("challanger_name", { minLength: 3, required: true })}
        aria-invalid={challanger_name ? "true" : "false"}
        placeholder="challanger name *"
      />

      {challanger_name?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">first name is required</p>
      )}

      <Input
        {...register("challanger_email",
          { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, required: true })
        }
        aria-invalid={challanger_email ? "true" : "false"}
        placeholder="email *"
      />

      {challanger_email?.type === "required" && (
        <p className="text-sm text-red-500" role="alert">email is required</p>
      )}
    </div>
  )
}

export default Challanger;
