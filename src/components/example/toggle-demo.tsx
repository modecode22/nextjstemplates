import { LuBold } from "react-icons/lu"

import { Toggle } from "../ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <LuBold className="h-4 w-4" />
    </Toggle>
  )
}
