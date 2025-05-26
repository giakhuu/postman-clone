import React from "react";
import { Animated, Pressable } from "react-native";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'black';
  disabled?: boolean;
  className?: string;
};



const baseClassNames =  "px-4 py-2 rounded"
const variantButton = {
    default: "bg-primary",
    destructive: "bg-red-500 text-white",
    outline: "border border-gray-300 bg-white text-gray-800",
    secondary: "bg-gray-200 text-gray-800",
    ghost: "bg-transparent text-gray-800",
    link: "text-blue-500 underline",
    black: "bg-black text-white"
}

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className = "" , variant = 'default', disabled = false, ...props }, ref) => {
    const mergedClassName = `${baseClassNames} ${className}`;
    return (
    <AnimatedPressable
      ref={ref}
      className={mergedClassName}
      disabled={disabled}
      {...props}
    />
  );
});

export default Button;