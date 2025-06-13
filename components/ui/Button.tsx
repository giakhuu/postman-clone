import { useThemeColors } from "@/hooks/useThemeColors";
import React, { useRef } from "react";
import { Animated, Pressable } from "react-native";
import { twMerge } from "tailwind-merge";
import { IconProvider } from "./Icon";
import { TextProvider } from "./Text";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'black';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
};



const baseButtonClass = "rounded flex-row items-center overflow-hidden";
const baseTextClass = "text-background"

const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

const sizeTextStyles = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-xl",
};

const sizeIconStyles = {
  sm: 18,
  md: 24,
  lg: 32,
};

const variantStyles = {
  default: {
    button: "bg-primary",
    text: "text-background",
    icon: "background"
  },
  destructive: {
    button: "bg-red-500",
    text: "text-white",
    icon: "white",
  },
  outline: {
    button: "border border-border bg-background",
    text: "text-primary",
    icon: "primary",
  },
  secondary: {
    button: "bg-gray-200",
    text: "text-gray-800",
    icon: "primary",
  },
  ghost: {
    button: "bg-transparent",
    text: "text-primary",
    icon: "primary",
  },
  link: {
    button: "",
    text: "text-blue-500 underline",
    icon: "primary",
  },
  black: {
    button: "bg-black",
    text: "text-white",
    icon: "white",
  },
};


const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className = "" , variant = 'default', size = 'md', disabled = false, ...props }, ref) => {

    const colors = useThemeColors();
    const mergedClassNameButton = twMerge(
      baseButtonClass,
      variantStyles[variant].button,
      sizeStyles[size],
      className
    );
    const mergedClassNameText = `
          ${baseTextClass} 
          ${variantStyles[variant].text} 
          ${sizeTextStyles[size]}`;

    // Animated value for scaling
    const scale = useRef(new Animated.Value(1)).current;

    // Handlers để animate
    const handlePressIn = (e: any) => {
      Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
    };
    const handlePressOut = (e: any) => {
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
    };
    
    return (
      <TextProvider value={mergedClassNameText}>
        <IconProvider value={{ color: colors[variantStyles[variant].icon as keyof typeof colors], size: sizeIconStyles[size] }}>
        <AnimatedPressable
          ref={ref}
          className={mergedClassNameButton}
          disabled={disabled}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{ transform: [{ scale }] }}
          {...props}
        >
        </AnimatedPressable>
        </IconProvider>
      </TextProvider>
  );
});

export default Button;