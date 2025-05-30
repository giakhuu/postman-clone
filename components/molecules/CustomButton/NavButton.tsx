// components/molecules/NavButton.tsx
import { Button, Icon, Text } from '@/components/ui'
import type { IconProps } from '@/components/ui/Icon'
import React from 'react'

export type NavButtonProps = {
  label: string
  iconName: IconProps['name']
  onPress: () => void
}

export const NavButton: React.FC<NavButtonProps> = ({ label, iconName, onPress }) => (
  <Button
    variant="ghost"
    className="flex-row items-center w-full justify-start px-4 py-2"
    onPress={onPress}
  >
    <Icon name={iconName} className="mx-4" size={20} />
    <Text className="ml-2 text-base font-medium">{label}</Text>
  </Button>
)