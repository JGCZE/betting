import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFormContext, Controller } from "react-hook-form"

const Visibility = () => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name="visibility"
        defaultValue="public"
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
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
