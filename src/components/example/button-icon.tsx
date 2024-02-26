import { LuChevronRight } from "react-icons/lu"
import { Button } from "../ui/button"


export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <LuChevronRight className="h-4 w-4" />
    </Button>
  )
}
