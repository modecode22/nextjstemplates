import { LuItalic } from "react-icons/lu"

import { Toggle } from "../ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <LuItalic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  )
}
