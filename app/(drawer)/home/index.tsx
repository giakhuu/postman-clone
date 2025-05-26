import { Text } from '@/components/ui'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
const index = () => {
  const { t } = useTranslation('home')

  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-xl font-semibold'>{t('header.welcome')}</Text>
      <Text className='text-muted-foreground'>{t('header.description')}</Text>
    </View>
  )
}

export default index