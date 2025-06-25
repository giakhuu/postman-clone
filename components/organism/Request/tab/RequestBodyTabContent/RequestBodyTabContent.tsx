import { useThemeColors } from '@/hooks/useThemeColors';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import RequestBodyTabRaw from './RequestBodyTabRaw';
// Removed styled import and usage; use View directly with Tailwind classes.

export default function BodyTypeSelector() {
    const colors = useThemeColors();
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
        ['none','form-data','x-www-form-urlencoded','raw','binary','GraphQL'].map(type => ({
        id: type,
        label: type,
        value: type,
        selected: type === 'none', // default selection
        labelStyle: { fontSize: 12, color: colors.primary },
        }))
    );

    const onPress = (selectedId: string) => {
        setRadioButtons(prev =>
        prev.map(rb => ({
            ...rb,
            selected: rb.id === selectedId,
        }))
        );
    };

    // Find the currently selected radio button's id
    const selectedId = radioButtons.find(rb => rb.selected)?.id;

    return (
        <View className="px-4 flex-1">
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <RadioGroup
                        radioButtons={radioButtons}
                        onPress={onPress}
                        selectedId={selectedId}
                        layout="row"
                        containerStyle={{
                            flexDirection: 'row',
                        }}
                    />
                </ScrollView>
            </View>
            <View className="flex-1">
                <RequestBodyTabRaw />
            </View>
        </View>

    );
}
