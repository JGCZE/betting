import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FormSections = () => {
  const { formState: { errors }, register } = useFormContext()
  const { email, password1, password2, userName } = errors

  return (
    <div className="grid gap-4">
      <div className="grid gap-3">
        <Label htmlFor="name-1">Uživtaleské jméno *</Label>

        <Input {...register("userName",
          { minLength: 3, required: true })}
          aria-invalid={userName ? "true" : "false"}
          placeholder="uživatelké jméno"
        />
      </div>

      <div className="grid gap-3">
        <Label htmlFor="email">Email *  <span className="text-red-500 ml-8"> {email && "povinný údaj"} </span></Label>

        <Input {...register("email",
          {
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            required: true
          }
        )}
          aria-invalid={email ? "true" : "false"}
          placeholder="email *"
        />
      </div>

      <div className="grid gap-3">
        <Label htmlFor="password-1">Heslo *</Label>

        <Input {...register("password1",
          { minLength: 6, required: true })}
          aria-invalid={password1 ? "true" : "false"}
          placeholder="heslo min 6 znaků"
        />
      </div>

      <div className="grid gap-3">
        <Label htmlFor="password-2">Potvrzení hesla *</Label>

        <Input {...register("password2",
          { minLength: 6, required: true })}
          aria-invalid={password2 ? "true" : "false"}
          placeholder="heslo min 6 znaků"
        />
      </div>
    </div>
  )
}
export default FormSections