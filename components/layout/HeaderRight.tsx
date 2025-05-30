import { Icon } from '@/components/ui';
import React from 'react';
import { View } from 'react-native';

type AntDesignIconName = keyof typeof import('@expo/vector-icons/AntDesign').default.glyphMap;

const headerRightItems: { name: AntDesignIconName; action: () => void }[] = [
    { name: 'search1', action: () => console.log('search click') },
    { name: 'bells', action: () => console.log('notifications click') },
    { name: 'user', action: () => console.log('profile click') },
];

const HeaderRight : React.FC = () => {
  return (
    <View className='flex-row mx-4'>
        {headerRightItems.map((item) => (
            <Icon
            key={item.name}
            name={item.name}
            size={24}
            onPress={item.action}
            className='mx-4'
            />
        ))}
    </View>
  )
}

export default HeaderRight