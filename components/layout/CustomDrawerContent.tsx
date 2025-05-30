import { Icon, Text } from '@/components/ui'
import { useThemeColors } from '@/hooks/theme/useThemeColors'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'

import type { IconProps } from '@/components/ui/Icon'
import { NavButton } from '../molecules/CustomButton/NavButton'

type NavItem = {
  label: string
  iconName: IconProps['name']
  routeName: string
}

const navigationItems: NavItem[] = [
  { label: 'Environment', iconName: 'setting', routeName: 'environment/index' },
  { label: 'History',     iconName: 'clockcircleo',   routeName: 'history/index' },
  { label: 'APIs',    iconName: 'earth',     routeName: 'settings/index' },
]

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const colors = useThemeColors()

  return (
    <View className='py-8 flex-1 w-50'>
      <Text className='text-3xl font-bold px-4'>Postman</Text>
      
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'flex-start',
        }}
      >
        <View className="w-full px-0">
          <DrawerItem
            icon={({ color, size }) => <Icon name="earth" size={24} color={color} />}
            label="My Workspace"
            onPress={() => {}}
            style={{
              margin: 0,
              padding: 0,
              borderRadius: 12,
              backgroundColor: colors.muted
            }}
            labelStyle={{ color: colors.secondaryForeground, fontSize: 16, fontWeight: '500' }}
          />


          <Text className='my-4 text-muted-foreground text-lg font-semibold text-2xl'>COLLECTIONS</Text>
          <Text className='my-4 text-muted-foreground text-lg font-semibold text-2xl'>NAVIGATION</Text>
          
          {navigationItems.map(item => (
            <NavButton
              key={item.routeName}
              label={item.label}
              iconName={item.iconName}
              onPress={() => console.log(item.routeName)}
            />
          ))}
          
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawerContent
