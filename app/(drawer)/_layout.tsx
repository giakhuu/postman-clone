import { Icon } from '@/components/ui';
import { useThemeColors } from '@/hooks/theme/useThemeColors';
import Drawer from 'expo-router/drawer';
import React from 'react';
import { View } from 'react-native';

const Layout = () => {
  const colors = useThemeColors();
  
  type IconName = "search1" | "bells" | "user";

  const headerRightItems: { name: IconName; action: () => void }[] = [
    { name: 'search1', action: () => console.log('search click') },
    { name: 'bells', action: () => console.log('notifications click') },
    { name: 'user', action: () => console.log('profile click') },
  ];

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: colors.primary,
        drawerLabelStyle: { marginLeft: 8 },
        headerRight: () => (
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
        ),
      }}>
        <Drawer.Screen
            name="home/index"
            options={{
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />
            }}
        />
        <Drawer.Screen
            name="request/index"
            options={{
                title: 'Requests',
            }}
        />
    </Drawer>
    );
}

export default Layout