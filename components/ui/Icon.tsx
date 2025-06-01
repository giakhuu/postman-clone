import React, { createContext, useContext } from "react";

type IconContextType = {
  color?: string;
  size?: number;
  className?: string; // nếu bạn muốn dùng NativeWind cho icon hỗ trợ className
};

const IconContext = createContext<IconContextType>({});

export const IconProvider = ({
  value,
  children,
}: {
  value: IconContextType;
  children: React.ReactNode;
}) => (
  <IconContext.Provider value={value}>{children}</IconContext.Provider>
);

export const useIconContext = () => useContext(IconContext);

// Wrapper cho icon, ví dụ cho AntDesign
import { useThemeColors } from "@/hooks/useThemeColors";
import AntDesign from "@expo/vector-icons/AntDesign";

export type IconProps = React.ComponentProps<typeof AntDesign> & {
  as?: React.ElementType;
};

export const Icon = React.forwardRef<any, IconProps>(
  ({ as: IconComponent = AntDesign, color, size, ...props }, ref) => {
    const context = useIconContext();
    const colors = useThemeColors();
    return (
      <IconComponent
        ref={ref}
        color={color ?? context.color ?? colors.primary}
        size={size ?? context.size ?? 24}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";