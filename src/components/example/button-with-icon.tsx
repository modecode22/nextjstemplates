import { LuMail } from "react-icons/lu"
import { Button } from "../ui/button"


export default function ButtonWithIcon() {
  return (
    <Button>
      <LuMail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}
