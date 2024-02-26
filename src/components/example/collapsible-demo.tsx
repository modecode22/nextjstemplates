"use client"

import * as React from "react"
import { LuChevronsUpDown, LuPlus, LuX } from "react-icons/lu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Button } from "../ui/button"



export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between muted-text space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="dark-ghost" size="sm" className="w-9 p-0">
            <LuChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded popover-bg px-4 py-3 font-mono muted-text text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded popover-bg px-4 py-3 font-mono text-sm muted-text">
          @radix-ui/colors
        </div>
        <div className="rounded popover-bg px-4 py-3 font-mono text-sm muted-text">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
