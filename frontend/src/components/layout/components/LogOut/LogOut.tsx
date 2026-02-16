import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../../ui/alert-dialog";
import useLogOutApi from "../hooks/useLogOut";


const LogOut = () => {
  const { mutation } = useLogOutApi()

  const handleLogOut = () => {
    console.log("RUN")

    mutation.mutate()
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="ml-4 w-26 rounded-2xl text-sm font-bold cursor-pointer hover:underline"
            variant="ghost"
          >
            Odhlásit
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Opravdu se chcete odhlásit?</AlertDialogTitle>

            <AlertDialogDescription>
              Potvrďte vaše odhlášení
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Zrušit
            </AlertDialogCancel>

            <AlertDialogAction
              className="cursor-pointer text-red-500 bg-transparent border-2 font-bold hover:underline hover:bg-transparent"
              onClick={handleLogOut}
            >
              Odhlásit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
export default LogOut
