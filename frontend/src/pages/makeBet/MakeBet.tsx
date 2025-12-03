import { FormProvider, useForm } from "react-hook-form"
import { CalendarComponent, Challanger, Rival, Stack, Visibility } from "./components"
import useMakeBetApi from "./useMakeBetApi/useMakeBetApi"
import { Button } from "../../components/ui/button"
import type { CreateBetDTO } from "../../lib/schemas/bet.schema"

export type TBetFormData = {
  challanger_name: string,
  challanger_email: string,
  rival_name: string,
  rival_email?: string,
  betTitle?: string,
  stack: string,
  deadline: string,
  visibility: "public" | "private",
}

const MakeBet = () => {
  const methods = useForm<CreateBetDTO>()

  const { mutation } = useMakeBetApi()

  const onSubmit = (data: CreateBetDTO) => {
    console.log("ON SUBMIT", data)
    mutation.mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <form className="w-1/2 flex flex-col gap-8" onSubmit={methods.handleSubmit(onSubmit)}>
        <Challanger />

        <Rival />

        <Stack />
        
        <div className="flex gap-4">
          <CalendarComponent />

          <Visibility />
        </div>

        <Button type="submit" className="w-1/2 cursor-pointer border-2">
          Odelsat
        </Button>
      </form>
      <span className="text-red-400 text-sm">* jsou povinná pole</span>
    </FormProvider>
  )
}

export default MakeBet
