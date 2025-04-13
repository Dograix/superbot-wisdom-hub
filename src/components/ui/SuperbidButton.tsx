
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SuperbidButtonProps = {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  fullWidth?: boolean;
};

const SuperbidButton: React.FC<SuperbidButtonProps> = ({
  variant = "default",
  size = "default",
  children,
  className,
  onClick,
  disabled = false,
  type = "button",
  icon,
  fullWidth = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-superbid-500 text-white hover:bg-superbid-600 active:bg-superbid-700";
      case "secondary":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      case "outline":
        return "border border-input bg-primary text-white hover:bg-primary/90";
      case "ghost":
        return "hover:bg-accent hover:text-accent-foreground";
      case "link":
        return "text-primary underline-offset-4 hover:underline";
      case "glass":
        return "glass-button";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90";
    }
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden transition-all active:scale-[0.98]",
        getVariantClasses(),
        fullWidth ? "w-full" : "",
        className
      )}
      size={size}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </Button>
  );
};

export default SuperbidButton;
