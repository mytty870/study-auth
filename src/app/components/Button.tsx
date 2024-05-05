import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const ButtonIconWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <span className="inline-flex items-center">
      {children}
    </span>
  )
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus:ring-4 gap-2",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white hover:bg-blue-400/90 focus:ring-blue-300",
        defaultOutline: "bg-[#FFCC33] text-white hover:bg-[#FFCC33]/90 focus:ring-[#FFCC33]/30 ",
        primary: "",

      },
      size: {
        default: "h-10 px-4 py-2"

      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      // variant: "default",
      variant: "defaultOutline",
      size: "default",
      fullWidth: false
    }
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
    startContent?: React.ReactElement
    endContent?: React.ReactElement
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, startContent, endContent, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className}))}
        type="button"
        {...props}
      >
        {startContent && (
          <ButtonIconWrapper>{startContent}</ButtonIconWrapper>
        )}
        {children}
        {endContent && (
          <ButtonIconWrapper>{endContent}</ButtonIconWrapper>
        )}
      </button>
    );
  }
);

Button.displayName = "Button"
