import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center duration-100   justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-dark-500  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary
        "primary-solid":
          "bg-primary-500 hover:bg-primary-400  text-light-500 hover:text-light-300 active:text-light-50  active:bg-primary-300      ",
        "primary-outline":
          " border border-primary-500  text-primary-500 hover:text-primary-400 active:text-primary-400 hover:bg-dark-800  active:bg-dark-700      ",
        "primary-ghost":
          " text-primary-500 hover:bg-dark-800 active:bg-dark-700  ",
        // Transparent
        "transparent": "hover:text-light-500 text-light-800",

        // Light
        "light-solid":
          "bg-light-500 hover:bg-light-400 text-dark-500 hover:text-dark-600 active:text-dark-900  active:bg-light-300   ",
        "light-outline":
          " border border-light-500   dark:text-light-500  dark:hover:bg-dark-300/50 dark:active:bg-dark-200   dark:hover:text-light-200 dark:active:text-light-50    ",
        "light-ghost": " dark:text-light-500  dark:hover:bg-dark-300/50 dark:active:bg-dark-200   dark:hover:text-light-200 dark:active:text-light-50  ",

        // Dark
        "dark-solid":
          "bg-dark-800 hover:bg-dark-700 text-primary-500 hover:text-primary-400 active:text-primary-300  active:bg-dark-600     ",
        "dark-outline":
          "border border-dark-700  hover:bg-dark-800 hover:text-dark-100 text-dark-50 active:bg-dark-700  active:text-dark-50 ",
        "dark-ghost":
          " hover:bg-dark-800 hover:text-dark-100 text-dark-50 active:bg-dark-700  active:text-dark-50 ",
       link: "link ",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded px-3",
        lg: "h-12 rounded px-8 text-lg",
        icon: "h-10 w-10",
        'small-icon': "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "primary-solid",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
