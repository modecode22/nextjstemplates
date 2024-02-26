import { LuItalic } from "react-icons/lu"

import { Toggle } from "../ui/toggle"

export default function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <LuItalic className="h-4 w-4" />
    </Toggle>
  )
}
