import Button from '@/components/ui/Button'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text>Home</Text>
      <Button>
        <Text>Click Me</Text>
      </Button>
    </View>
  )
}

export default index