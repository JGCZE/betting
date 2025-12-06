"use client"

import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { parseDate } from "chrono-node"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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
  const { formState: { errors }, register } = useFormContext()

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
          className="bg-background pr-10"
          id="date"
          onChange={(e) => {
            setValue(e.target.value)
            const date = parseDate(e.target.value)
            if (date) {
              setDate(date)
              setMonth(date)
            }
          }}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
          placeholder="Za dva dny..."
          value={value}
        />
        <Popover onOpenChange={setOpen} open={open}>
          <PopoverTrigger asChild>
            <Button
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
              id="date-picker"
              variant="ghost"
            >
              <CalendarIcon className="size-5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="w-auto overflow-hidden p-0">
            <Calendar
              captionLayout="dropdown"
              disabled={(date) => date < new Date()}
              fromYear={new Date().getFullYear()} // od současného roku
              mode="single"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date)
                setValue(formatDate(date))
                setOpen(false)
              }}
              selected={date}
              showOutsideDays={false}
              toYear={new Date().getFullYear() + 10} // do roku +10
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
