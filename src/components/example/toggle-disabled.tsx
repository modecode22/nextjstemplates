import { LuUnderline } from "react-icons/lu"

import { Toggle } from "../ui/toggle"

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle underline" disabled>
      <LuUnderline className="h-4 w-4" />
    </Toggle>
  )
}
