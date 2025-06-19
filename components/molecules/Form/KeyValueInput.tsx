import { Button, Icon, Input } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'

const KeyValueInput = () => {
  return (
    <View className='my-2'>
        <View className='flex-row'>
            <Input
                placeholder='Key'
                className='flex-1 mr-2'
            ></Input>
            <Button variant = "outline">
            <   Icon name = "delete"></Icon>
            </Button>
        </View>
        <Input
            placeholder='Value'
            className='mt-1'
        ></Input>
    </View>
  )
}

export default KeyValueInput