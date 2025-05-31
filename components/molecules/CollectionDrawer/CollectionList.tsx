import { Button, Icon, Text } from '@/components/ui'
import React from 'react'
import { View } from 'react-native'
import CollectionItem from './CollectionItem'
export type RequestType = {
  id: string
  name: string
  method: string
}
export type FolderType = {
  id: string
  name: string
  requests: RequestType[]
}
export type CollectionType = {
  id: string
  name: string
  folders: FolderType[]
}

type CollectionListProps = {
  collections: CollectionType[]
}

const CollectionList: React.FC<CollectionListProps> = ({ collections }) => (
  <View className="w-full px-2">
    {collections.map(collection => (
      <CollectionItem
        key={collection.id}
        collection={collection}
      />
    ))}
    <Button size='md' className="mt-2 w-full flex-row items-center justify-center shadow-sm" onPress={() => {}}>
      <Icon name="plus" className="mr-2" />
      <Text className="font-medium">New Collection</Text>
    </Button>
  </View>
)

export default CollectionList
