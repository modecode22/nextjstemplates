import { LuAlertCircle } from "react-icons/lu"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"



export default function AlertDestructive() {
  return (
    <Alert variant="error">
      <LuAlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
