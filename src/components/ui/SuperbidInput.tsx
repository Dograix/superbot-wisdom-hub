
import React, { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface SuperbidInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const SuperbidInput = forwardRef<HTMLInputElement, SuperbidInputProps>(
  (
    {
      label,
      error,
      icon,
      rightIcon,
      className,
      containerClassName,
      labelClassName,
      errorClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "block text-sm font-medium text-foreground",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <Input
            ref={ref}
            className={cn(
              "transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary",
              icon ? "pl-10" : "",
              rightIcon ? "pr-10" : "",
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className={cn("text-xs text-red-500", errorClassName)}>{error}</p>
        )}
      </div>
    );
  }
);

SuperbidInput.displayName = "SuperbidInput";

export default SuperbidInput;
