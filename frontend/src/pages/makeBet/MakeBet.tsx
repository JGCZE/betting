import { FormProvider, useForm } from "react-hook-form"
import { Challanger, Rival, Stack, Visibility } from "./components"
import useMakeBetApi from "./useMakeBetApi/useMakeBetApi"
import { Button } from "../../components/ui/button"

export type TBetFormData = {
  challanger_name: string,
  challanger_email: string,
  rival_name: string,
  rival_email?: string,
  stack: string,
  deadline?: string,
  visibility: "public" | "private",
}

const MakeBet = () => {
  const methods = useForm<TBetFormData>()
  const { mutation } = useMakeBetApi()

  const onSubmit = (data: TBetFormData) => {
    console.log("ON SUBMIT", data)
    mutation.mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <form className="w-1/2 flex flex-col gap-8" onSubmit={methods.handleSubmit(onSubmit)}>
        <Challanger />

        <Rival />

        <Stack />

        <Visibility />

        <Button type="submit" className="w-1/2 cursor-pointer border-2">
          Odelsat
        </Button>
      </form>
    </FormProvider>
  )
}

export default MakeBet
