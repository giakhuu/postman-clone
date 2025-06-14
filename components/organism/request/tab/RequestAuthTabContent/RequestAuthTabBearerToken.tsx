import { Input, Text } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'

const RequestAuthTabBearerToken = () => {
  return (
    <View className='my-2 flex-row items-center'>
        <Text className='text-lg mb-2'>Token</Text>
        <Input
            placeholder='Input Bearer Token....'
            className='mb-2 flex-1 ml-2'
        ></Input>
    </View>
  )
}

export default RequestAuthTabBearerToken