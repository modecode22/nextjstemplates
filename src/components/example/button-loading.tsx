import { LuLoader2 } from "react-icons/lu"
import { Button } from "../ui/button"


export default function ButtonLoading() {
  return (
    <Button disabled>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}
