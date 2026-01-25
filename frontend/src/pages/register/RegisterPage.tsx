import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import FormSections from "./components/FormSections";

type TRegisterUser = {
  email: string;
  password1: string;
  password2: string;
  userName: string
}

const Register = () => {
  const methods = useForm<TRegisterUser>()


  const onSubmit = (formData: TRegisterUser) => {
    console.log("DATA", formData)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer rounded-2xl py-5 px-6 font-bold">
          <Button variant="outline">Registrace</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Registrace</DialogTitle>

            <DialogDescription>
              Vytvořte si účet a uzavírejte sázky s přáteli
            </DialogDescription>
          </DialogHeader>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormSections />

              <DialogFooter className="mt-8">
                <DialogClose asChild>
                  <Button className="cursor-pointer text-red-500" variant="outline">Zrušit</Button>
                </DialogClose>

                <Button
                  className="cursor-pointer"
                  type="submit"
                >
                  Registrovat
                </Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default Register