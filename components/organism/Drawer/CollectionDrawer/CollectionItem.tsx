import { Button, Icon, Text } from '@/components/ui'
import Divider from '@/components/ui/Divider'
import { useThemeColors } from '@/hooks/useThemeColors'
import { Collection } from '@/model/collection/Collection'
import React from 'react'
import { View } from 'react-native'
import FolderItem from './FolderItem'

interface CollectionItemProps {
  collection: Collection
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    const colors = useThemeColors()
    return (
  
        <View className="mb-2 bg-secondary rounded-lg p-4 shadow-sm border border-muted">
            <View className='flex-row items-center'>
                <Icon name={'folder1'} className='pl-2 pr-4' color={colors.mutedForeground}/>
                <Text className="font-semibold mb-1 text-secondary-foreground flex-1">{collection.name}</Text>
                <Button
                    variant='ghost'
                    size='sm'>
                    <Icon name="plus" className="ml-auto" color={colors.mutedForeground} />
                </Button>
            </View>
            
            <Divider/>
            {collection.folders.map(folder => (
                <FolderItem
                    key={folder.id}
                    folder={folder}
                />
            ))}
        </View>
    )
}

export default CollectionItem
