import React from "react";
import { Animated, Pressable } from "react-native";
import { TextProvider } from "./Text";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'black';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
};



const baseButtonClass = "rounded"
const baseTextClass = "text-background"

const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

const sizeTextStyles = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const variantStyles = {
  default: {
    button: "bg-primary",
    text: "text-background",
  },
  destructive: {
    button: "bg-red-500",
    text: "text-white",
  },
  outline: {
    button: "border border-gray-300 bg-white",
    text: "text-gray-800",
  },
  secondary: {
    button: "bg-gray-200",
    text: "text-gray-800",
  },
    ghost: {
    button: "bg-transparent",
    text: "text-gray-800",
  },
  link: {
    button: "",
    text: "text-blue-500 underline",
  },
  black: {
    button: "bg-black",
    text: "text-white",
  },
};

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className = "" , variant = 'default', size = 'md', disabled = false, ...props }, ref) => {
    const mergedClassNameButton = `
          ${baseButtonClass} 
          ${variantStyles[variant].button} 
          ${sizeStyles[size]} 
          ${className}`;
    const mergedClassNameText = `
          ${baseTextClass} 
          ${variantStyles[variant].text} 
          ${sizeTextStyles[size]}`;
    return (
      <TextProvider value={mergedClassNameText}>
        <AnimatedPressable
          ref={ref}
          className={mergedClassNameButton}
          disabled={disabled}
          {...props}
        >
        </AnimatedPressable>
      </TextProvider>
  );
});

export default Button;