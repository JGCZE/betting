import { FormProvider, useForm } from "react-hook-form"
import type { components } from "@/types/generatedTypes"
import { Button } from "@/components/ui/button"
import useMakeBetApi from "./api/useMakeBetApi"
import { CalendarComponent, Challanger, Rival, Stack, Visibility } from "./components"

export type TBetFormData = components["schemas"]["CreateBetDto"]

const MakeBet = () => {
  const methods = useForm<TBetFormData>()

  const { mutation } = useMakeBetApi()

  const onSubmit = (data: TBetFormData) => {
    console.log("ON SUBMIT", data)
    mutation.mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <form className="w-1/2 flex flex-col gap-8 mt-12" onSubmit={methods.handleSubmit(onSubmit)}>
        <Challanger />

        <Rival />

        <Stack />

        <div className="flex gap-4 items-end">
          <CalendarComponent />

          <Visibility />
        </div>

        <Button className="w-1/2 cursor-pointer border-2" type="submit">
          Odelsat
        </Button>
        <span className="text-red-400 text-sm">* jsou povinná pole</span>
      </form>
    </FormProvider>
  )
}

export default MakeBet
