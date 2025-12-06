import { useFormContext, Controller } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const Visibility = () => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        defaultValue="public"
        name="visibility"
        render={({ field }) => (
          <Select defaultValue={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-[180px] cursor-pointer">
              <SelectValue placeholder="Private or public" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Viditelnost</SelectLabel>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </>
  )
}

export default Visibility
