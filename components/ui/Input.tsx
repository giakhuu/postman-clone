import { useThemeColors } from '@/hooks/useThemeColors';
import React from 'react';
import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

export type InputProps = TextInputProps & {
  className?: string;
};

export const Input = React.forwardRef<TextInput, InputProps>((
    {
        placeholder = 'Nhập nội dung...',
        value = '',
        onChangeText,
        className = '',
        ...props
    },
    ref
) => {
    const colors = useThemeColors();
    return (
        <View className={twMerge('rounded border border-border ', className)}>
            <TextInput
                ref={ref}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.mutedForeground}
                {...props}
            />
        </View>
    );
});
