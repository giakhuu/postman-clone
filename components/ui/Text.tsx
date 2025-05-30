import "@/global.css";
import * as React from 'react';
import { createContext, useContext } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
const TextClassContext = createContext<string | undefined>(undefined);

export const TextProvider = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => (
  <TextClassContext.Provider value={value}>
    {children}
  </TextClassContext.Provider>
);

export const useTextClass = () => useContext(TextClassContext);

type TextProps = RNTextProps & {
  asChild?: boolean;
  className?: string;
};

const Text = React.forwardRef<RNText, TextProps>(
  ({ className, style, ...props }, ref) => {
    const contextClass = useTextClass();
    // Ưu tiên className truyền vào, nếu không thì dùng context, nếu không có thì default
    const mergedClass = twMerge('text-primary', className, contextClass);
    
    return (
      <RNText
        // className giờ đây được NativeWind tự xử lý
        className={mergedClass}
        style={style}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text };

