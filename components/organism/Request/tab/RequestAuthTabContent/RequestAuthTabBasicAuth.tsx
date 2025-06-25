import { Input, Text } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'

const RequestAuthTabBasicAuth = () => {
  return (
    <View className='my-2'>
        <View className='my-2 flex-row items-center'>
            <Text className='text-lg mb-2'>Username</Text>
            <Input
                placeholder='Input Username....'
                className='mb-2 flex-1 ml-2'
            ></Input>
        </View>
        <View className='my-2 flex-row items-center'>
            <Text className='text-lg mb-2'>Password</Text>
            <Input
                placeholder='Input Password....'
                className='mb-2 flex-1 ml-2'
            ></Input>
        </View>
    </View>
  )
}

export default RequestAuthTabBasicAuth