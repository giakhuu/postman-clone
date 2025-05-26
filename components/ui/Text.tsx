import * as React from 'react';
import { createContext, useContext } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

const TextClassContext = createContext<string | undefined>(undefined);

export const TextProvider = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => (
  <TextClassContext.Provider value={value}>{children}</TextClassContext.Provider>
);

export const useTextClass = () => useContext(TextClassContext);

type TextProps = RNTextProps & {
  asChild?: boolean;
  className?: string;
};

const Text = React.forwardRef<RNText, TextProps>(
  ({ className, ...props }, ref) => {
    const contextClass = useTextClass();
    // Ưu tiên className truyền vào, nếu không có thì lấy từ context, nếu không có nữa thì lấy mặc định
    const mergedClass =
      className ?? contextClass ?? "text-base text-light-foreground dark:text-dark-foreground";
    return <RNText className={mergedClass} ref={ref} {...props} />;
  }
);
Text.displayName = 'Text';

export { Text };

