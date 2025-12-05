"use client"

import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"

const formatDate = (date?: Date) => {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

const CalendarComponent = () => {
  const { register, formState: { errors } } = useFormContext()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [date, setDate] = useState<Date | undefined>(
    parseDate(value) || undefined
  )
  const [month, setMonth] = useState<Date | undefined>(date)

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative flex gap-2">
        <Input
          {...register("deadline", { required: true })}
          aria-invalid={errors.deadline ? "true" : "false"}
          id="date"
          value={value}
          placeholder="Za dva dny..."
          className="bg-background pr-10"
          onClick={() => setOpen(true)}
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
              setMonth(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              showOutsideDays={false}
              selected={date}
              disabled={(date) => date < new Date()}
              fromYear={new Date().getFullYear()} // od současného roku
              toYear={new Date().getFullYear() + 10} // do roku +10
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="text-muted-foreground px-1 text-sm">
        Tvoje sázka má dedaline do{" "}
        <span className="font-medium">{formatDate(date)}</span>
      </div>
    </div>
  )
}

export default CalendarComponent;
