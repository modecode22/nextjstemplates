import { LuItalic } from "react-icons/lu"

import { Toggle } from "../ui/toggle"

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <LuItalic className="h-4 w-4" />
    </Toggle>
  )
}
