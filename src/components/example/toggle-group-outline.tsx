import { LuBold, LuItalic, LuUnderline } from "react-icons/lu"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "../ui/toggle-group"

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <LuBold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <LuItalic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <LuUnderline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
