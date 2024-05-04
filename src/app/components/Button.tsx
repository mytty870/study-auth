import { forwardRef } from "react";
import { GoogleIcon } from "./icons/GoogleIcon";

export type ButtonProps = {
  children: React.ReactNode
  startContent?: React.ReactElement
  endContent?: React.ReactElement
}

export const Button = ({
  children,
  startContent,
  endContent,
}: ButtonProps) => {
  return (
    <button>
      {startContent && (
        <span className="inline-flex items-center">
          {startContent}
        </span>
      )}
      {children}
      {endContent && (
        <span className="inline-flex items-center">
          {endContent}
        </span>
      )}
    </button>
  )

}