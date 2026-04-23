import React from "react"
import { useState, useRef } from "react"
import axios from "axios"
import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Navbar() {
  let titleInput = useRef(null)
  let url = 'https://frontend-projects-bf330-default-rtdb.asia-southeast1.firebasedatabase.app/'
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);

  function handleSubmit(){
    axios.post(`${url}meet.json`,{
      title: titleInput.current.value,
      date: date,
    }
    ).then(()=>{
      console.log('date saved')
    })
  }

  return (
    <div>
      <div className="border-b border-neutral-100 py-3 ">
        <div className=" max-w-4xl mx-auto flex items-center justify-between">
            <Link>Codekaro Meetings</Link>
            <div className="flex gap-4 items-center">
              <Link to="/previous">Previous Meetings</Link>
              <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Add Meeting</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Meeting</SheetTitle>
          <SheetDescription>
            Create new meeting with your members, click add when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="name" ref={titleInput} >Title</Label>
            <Input id="name" placeholder="Meeting title" />
          </div>

          {/* date and time */}

          <FieldGroup className="mx-auto  ">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className="w-32 justify-between font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-full">
        <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>

        </div>
        <SheetFooter>
          <Button onClick={handleSubmit} >Add meeting</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    
    
               {/* <Link to="/previous">Add Meeting</Link>  */}
            </div>

        </div>


      </div>
    </div>
  )
}

export default Navbar
