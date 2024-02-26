import React, { ReactNode } from "react";
import {
  Tooltip as DefaultTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "../ui/tooltip";

type TooltipProps = {
  children: ReactNode;
  label: string;
  delayDuration?: number | undefined;
};

const Tooltip = ({ children, label, delayDuration = 100 }: TooltipProps) => {
  return (
    <TooltipProvider>
      <DefaultTooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <TooltipArrow />
          <p>{label}</p>
        </TooltipContent>
      </DefaultTooltip>
    </TooltipProvider>
  );
};

export default Tooltip;
