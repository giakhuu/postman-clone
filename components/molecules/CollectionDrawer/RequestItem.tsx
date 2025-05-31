import { Text } from '@/components/ui'
import { HttpMethod } from '@/lib/enum/HttpMethod'
import React from 'react'
import { View } from 'react-native'
import Tag from '../Request/Tag'
import { RequestType } from './CollectionList'

interface RequestItemProps {
  request: RequestType
}

const RequestItem: React.FC<RequestItemProps> = ({ request }) => (
  <View className="flex-row items-center py-1">
    <Tag method={request.method as HttpMethod} />
    <Text className='text-lg ml-2'>{request.name}</Text>
  </View>
)

export default RequestItem
