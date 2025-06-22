import { Button, Icon, Text } from '@/components/ui'
import { useThemeColors } from '@/hooks/useThemeColors'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'

import CollectionList from '@/components/organism/Drawer/CollectionDrawer/CollectionList'
import type { IconProps } from '@/components/ui/Icon'
import { useCollectionStorage } from '@/hooks/useCollectionStorage'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

type NavItem = {
  label: string
  iconName: IconProps['name']
  routeName: string
}

const navigationItems: NavItem[] = [
  { label: 'evironment', iconName: 'setting', routeName: 'testThingScreen/index' },
  { label: 'history',     iconName: 'clockcircleo',   routeName: 'history/index' },
  { label: 'API',    iconName: 'earth',     routeName: 'settings/index' },
]



const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const colors = useThemeColors()
  const { t: tDrawer } = useTranslation('drawer')
  const { t: tCommon } = useTranslation('common') 

  const { collections } = useCollectionStorage()
  
  return (
    <View className='bg-background pt-12 flex-1 w-50 '>
      <Text className='text-3xl font-bold px-4'>{tCommon("appName")}</Text>
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
              padding: 0,
              borderRadius: 12,
              backgroundColor: colors.secondary
            }}
            labelStyle={{ color: colors.secondaryForeground, fontSize: 20, fontWeight: '500' }}
          />

          <Text className='my-4 text-muted-foreground text-lg font-semibold text-2xl'>{tDrawer("section.collection")}</Text>
          <CollectionList
            collections={collections}
          />

          <Text className='my-4 text-muted-foreground text-lg font-semibold text-2xl'>{tDrawer("section.navigation")}</Text>
          
          {navigationItems.map(item => (
            <NavButton
              key={item.routeName}
              label={tDrawer(`navigation.${item.label}`)}
              iconName={item.iconName}
              routeName={item.routeName}
            />
          ))}
          
        </View>
      </DrawerContentScrollView>
    </View>
  )
}
type NavButtonProps = {
  label: string
  iconName: IconProps['name']
  routeName: string
}

const NavButton: React.FC<NavButtonProps> = ({ label, iconName, routeName }) => {
  const colors = useThemeColors()
  const router = useRouter()
  return (
      <Button
        variant="ghost"
        className="flex-row items-center w-full justify-start px-4 py-2"
        onPress={() => {
          router.navigate(`/(drawer)/testThingScreen`)
        }}
        size='lg'
      >
        <Icon name={iconName} className="mx-4" size={20} />
        <Text className="ml-2 text-base font-medium">{label}</Text>
      </Button>
    )
} 

export default CustomDrawerContent
