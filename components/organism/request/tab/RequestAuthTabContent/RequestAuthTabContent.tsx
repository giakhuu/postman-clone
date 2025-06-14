import DropDownPick from '@/components/molecules/CustomButton/DropDownPick';
import { Text } from '@/components/ui';
import React from 'react';
import { View } from 'react-native';
import RequestAuthTabApiKey from './RequestAuthTabApiKey';
export const RequestAuthTabContent: React.FC = () => {
  return (
    <View>
      <View className='border border-border rounded bg-secondary p-2'>
        <Text className='text-xl'>Auth Type</Text>
        <DropDownPick
          items={[
            { label: 'Basic Auth', value: 'basic' },
            { label: 'Bearer Token', value: 'bearer' },
            { label: 'API Key', value: 'apikey' },
            { label: 'No Auth', value: 'noauth' },]}
          value='basic'
          containerClassName='mb-2'
          buttonClassName='items-center justify-between'
        ></DropDownPick>
        <Text className='text-muted-foreground'>Basic Auth is used to authenticate requests using a username and password.</Text>
      </View>
      <View className='my-4'>
        <Text className='my-1 text-xl'>Auth Content</Text>
        <RequestAuthTabApiKey></RequestAuthTabApiKey>
      </View>
    
    </View>
  )
}