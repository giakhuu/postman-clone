import { useThemeColors } from '@/hooks/useThemeColors';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import React, { useState } from 'react';
import { View } from 'react-native';

interface CodeBodyEditorProps {
    initialValue?: string;
    language?: "json" | "javascript";
}

export default function CodeBodyEditor({ initialValue = "", language = "json" }: CodeBodyEditorProps) {
    const [text, setText] = useState(initialValue || '{\n  "test": "test"\n}');
    const colors = useThemeColors();
    return (
        <View className='flex-1'>
            <CodeEditor
                initialValue={text}
                language={language}
                syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
                showLineNumbers
                onChange={setText}
                style={{
                    fontSize: 14,
                    inputLineHeight: 20,
                    highlighterLineHeight: 20,
                    backgroundColor: colors.background,
                }}
            />
        </View>
    );
}
