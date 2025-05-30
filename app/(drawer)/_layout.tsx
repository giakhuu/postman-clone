
import { CustomDrawerContent, HeaderRight } from '@/components/layout';
import { Icon } from '@/components/ui';
import { useThemeColors } from '@/hooks/theme/useThemeColors';
import Drawer from 'expo-router/drawer';
import React from 'react';

const Layout = () => {
  const colors = useThemeColors();


  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: colors.primary,
        drawerHideStatusBarOnOpen: true,
        drawerLabelStyle: { marginLeft: 8 },
        headerRight: () => (
          <HeaderRight/>
        ),
        
      }}>
        <Drawer.Screen
            name="home/index"
            options={{
                title: 'My Workspace',
                drawerLabel: 'My Workspace',
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