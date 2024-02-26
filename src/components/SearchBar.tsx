"use client"

import * as React from "react"
import {
  LuCalculator,
  LuCalendar,
  LuCreditCard,
  LuSearch,
  LuSettings,
  LuSmile,
  LuFrame 
} from "react-icons/lu"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command"
import { Button } from "./ui/button"
import { LuAsterisk } from "react-icons/lu";


 const SearchBar = () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
  
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
  
    return (
      <>
        <Button onClick={()=>{
            setOpen(true)
        }} variant={'dark-outline'} className="text-sm muted-text flex gap-2 border-dashed border-primary-500/20 group">
         <LuSearch />
          Search
          <kbd className="pointer-events-none bg-gradient-to-tr from-primary-800 via-primary-900 to-primary-700 shadow-md border-primary-800 group-hover:shadow-primary-900/20 duration-75  inline-flex h-5 select-none items-center gap-1 rounded border  px-1.5 text-xs font-medium text-light-900 opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LuFrame  className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <LuSmile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <LuCalculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  }
  export default SearchBar