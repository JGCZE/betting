import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../ui/alert-dialog";


const LogOut = () => {

  const handleLogOut = () => {

  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="ml-8 rounded-2xl text-sm cursor-pointer hover:underline" variant="destructive">Odhlásit</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Opravdu se chcete odhlásit?</AlertDialogTitle>

            <AlertDialogDescription>
              Potvrďte vaše odhlášení
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Zrušit</AlertDialogCancel>

            <AlertDialogAction onClick={handleLogOut}>
              Odhlásit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
export default LogOut