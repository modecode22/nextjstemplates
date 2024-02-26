import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow
} from "../ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} >
        <TooltipTrigger asChild>
          <Button variant="dark-outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
        <TooltipArrow />
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
