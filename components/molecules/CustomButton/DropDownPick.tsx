import { Button, Icon } from '@/components/ui';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

export interface DropDownItem {
  label: string;
  value: string;
}

interface DropDownPickProps {
  items: DropDownItem[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  buttonClassName?: string;
  containerClassName?: string;
}

const DropDownPick: React.FC<DropDownPickProps> = ({ items, value, onChange, placeholder = 'Select...', containerClassName, buttonClassName }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(value);

  const handleSelect = (val: string) => {
    setSelected(val);
    setOpen(false);
    onChange?.(val);
  };

  const selectedLabel = items.find(i => i.value === selected)?.label || placeholder;

  return (
    <View className={twMerge("relative", containerClassName)}>
      <Button
        variant="outline"
        size='lg'
        className={twMerge("flex-row", buttonClassName)}
        onPress={() => setOpen(o => !o)}
      >
        <Text className="text-base text-foreground mr-2">{selectedLabel}</Text>
        <Icon name="down" size={12}></Icon>
      </Button>
      {open && (
        <View className="absolute left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-10 max-h-60">
          <FlatList
            data={items}
            keyExtractor={item => item.value}
            renderItem={({ item }) => {
              const isSelected = item.value === selected;
              return (
                <TouchableOpacity
                  className={`px-4 py-3 ${isSelected ? 'bg-muted' : ''}`}
                  onPress={() => handleSelect(item.value)}
                  activeOpacity={0.7}
                >
                  <Text className="text-base text-foreground">{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DropDownPick;
