import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    className?: string;
}

export const Input : React.FC<InputProps> = ({
    placeholder = 'Nhập nội dung...',
    value = '',
    onChangeText,
    className = '',
}) => {
    const [text, setText] = useState('');
    return (
        <View className={twMerge('rounded border border-border ', className)}>
            <TextInput
                placeholder={placeholder}
                value={text}
                onChangeText={setText}
            />
        </View>
    );
}
