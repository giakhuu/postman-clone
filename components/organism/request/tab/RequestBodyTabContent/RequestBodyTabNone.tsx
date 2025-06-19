import { Text } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'

const RequestBodyTabNone = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text className='text-accent-foreground text-center'>This request does not have a body</Text>
    </View>
  )
}

export default RequestBodyTabNone