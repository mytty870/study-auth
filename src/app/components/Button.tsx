import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const ButtonIconWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <span className="inline-flex items-center">
      {children}
    </span>
  )
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus:ring-2 gap-2",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white hover:bg-blue-400/90 focus:ring-blue-300",
        defaultOutline: "bg-white border border-[#d6e3ed] hover:bg-[#f5fbff] disabled:opacity-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full"
      },
      radius: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      radius: "default"
    }
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants>{
    startContent?: React.ReactElement
    endContent?: React.ReactElement
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, fullWidth, children, startContent, endContent, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, radius, variant, size, fullWidth}))}
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
