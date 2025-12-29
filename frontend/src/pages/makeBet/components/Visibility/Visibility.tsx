import { useFormContext, Controller } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const Visibility = () => {
  const { control } = useFormContext()

  return (
    <div>
      <p className="text-xs mb-4 text-gray-300">
        Viditelnost sázky
      </p>

      <Controller
        control={control}
        defaultValue="public"
        name="visibility"
        render={({ field }) => (
          <Select defaultValue={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-36 cursor-pointer">
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
    </div>
  )
}

export default Visibility
