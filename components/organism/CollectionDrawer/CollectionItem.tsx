import { Icon, Text } from '@/components/ui'
import Divider from '@/components/ui/Divider'
import { useThemeColors } from '@/hooks/useThemeColors'
import React from 'react'
import { View } from 'react-native'
import { CollectionType } from './CollectionList'
import FolderItem from './FolderItem'

interface CollectionItemProps {
  collection: CollectionType
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    const colors = useThemeColors()
    return (
  
        <View className="mb-2 bg-secondary rounded-lg p-4 shadow-sm border border-muted">
            <View className='flex-row'>
                <Icon name={'folder1'} className='pl-2 pr-4' color={colors.mutedForeground}/>
                <Text className="font-semibold mb-1 text-secondary-foreground">{collection.name}</Text>
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
