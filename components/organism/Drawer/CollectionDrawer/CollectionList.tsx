import { Button, Icon, Text } from '@/components/ui'
import { useCollectionStorage } from '@/hooks/useCollectionStorage'
import { Collection } from '@/model/collection/Collection'
import React from 'react'
import { View } from 'react-native'
import CollectionItem from './CollectionItem'


type CollectionListProps = {
  collections: Collection[]
}



const CollectionList: React.FC<CollectionListProps> = ({ collections }) => {
  const { addCollection } = useCollectionStorage()
  const handleAddCollection = () => {
    const newCollection = new Collection(Date.now().toString(), 'New Collection')
    console.log("CollectionList: add item")
    addCollection(newCollection)
  }
  return (
      <View className="w-full px-2">
        {collections.map(collection => (
          <CollectionItem
            key={collection.id}
            collection={collection}
          />
        ))}
        <Button size='md' className="mt-2 w-full flex-row items-center justify-center shadow-sm" onPress={() => {
          handleAddCollection()
        }}>
          <Icon name="plus" className="mr-2" />
          <Text className="font-medium">New Collection</Text>
        </Button>
      </View>
  )
}



export default CollectionList
