import { useFormContext } from "react-hook-form";
import Input from "../../../../components/ui/input";

const Challanger = () => {
  const { register, formState: { errors } } = useFormContext()
  const { challanger_name, challanger_email } = errors

  return (
    <div className="flex flex-col gap-4">
      <label className="text-red-400">Vyzyvatel</label>
      <Input
        {...register("challanger_name", { required: true, minLength: 3 })}
        aria-invalid={challanger_name ? "true" : "false"}
        placeholder="challanger name *"
      />

      {challanger_name?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">first name is required</p>
      )}

      <Input
        {...register("challanger_email",
          { required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ })
        }
        aria-invalid={challanger_email ? "true" : "false"}
        placeholder="email *"
      />

      {challanger_email?.type === "required" && (
        <p role="alert" className="text-sm text-red-500">email is required</p>
      )}
    </div>
  )
}

export default Challanger;
