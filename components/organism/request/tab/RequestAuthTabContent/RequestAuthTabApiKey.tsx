import DropDownPick from '@/components/molecules/CustomButton/DropDownPick'
import { Input, Text } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'
const RequestAuthTabApiKey = () => {
  return (
    <View>
      <View className='my-2 flex-row items-center'>
          <Text className='text-lg mb-2'>Key</Text>
          <Input
              placeholder='Key'
              className='mb-2 flex-1 ml-2'
          ></Input>
      </View>
      <View className='my-2 flex-row items-center'>
          <Text className='text-lg mb-2'>Value</Text>
          <Input
              placeholder='Value'
              className='mb-2 flex-1 ml-2'
          ></Input>
      </View>
      <View className='my-2 flex-row items-center'>
          <Text className='text-lg mb-2'>Add</Text>
          <DropDownPick items={[
            { label: 'Header', value: 'header' },
            { label: 'Query Params', value: 'queryparams' },
          ]} value='header' containerClassName='mb-2 flex-1 ml-2'
          ></DropDownPick>
      </View>
    </View>
  )
}

export default RequestAuthTabApiKey