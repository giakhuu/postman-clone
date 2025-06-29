import { Input, Text } from '@/components/ui';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
export interface TextToInputHandle {
  startEditing: () => void;
}

interface TextToInputProps {
    initial: string,
    onSave: (v: string) => void,
    textClassName: string,
    inputClassName: string
}

const TextToInput = forwardRef<TextToInputHandle, TextToInputProps>(
  ({ initial, onSave, textClassName="", inputClassName=""}, ref) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(initial);

    useImperativeHandle(ref, () => ({
      startEditing: () => 
        {
            setEditing(true)
            setValue("")
        },
    }));

    const onBlurOrSubmit = () => {
      setEditing(false);
      onSave(value);
    };

    return (
      <>
        {editing ? (
          <Input
            value={value}
            onChangeText={setValue}
            onBlur={onBlurOrSubmit}
            onSubmitEditing={onBlurOrSubmit}
            className={inputClassName}
            autoFocus
          />
        ) : (
          <Text className={textClassName}>{value}</Text>
        )}
      </>
    );
  }
);


export default TextToInput