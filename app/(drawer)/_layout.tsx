import Drawer from 'expo-router/drawer';
import React from 'react';

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
        <Drawer.Screen
            name="home"
            options={{
                title: 'Home',
                headerShown: false,
            }}
        >
        </Drawer.Screen>
    </Drawer>
    );
}

export default Layout