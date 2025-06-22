import { Button, Icon, Text } from '@/components/ui'
import { useThemeColors } from '@/hooks/useThemeColors'
import { Folder } from '@/model/folder/Folder'
import React, { useState } from 'react'
import { View } from 'react-native'
import RequestItem from './RequestItem'


interface FolderItemProps {
  folder: Folder
}

const FolderItem: React.FC<FolderItemProps> = ({ folder }) => {
    const colors = useThemeColors()
    const [expandedFolders, setExpandedFolders] = useState(false)

    const toggleFolder = () => {
        setExpandedFolders(prev => !prev)
    }

    return (
        <View>
            <Button onPress={toggleFolder} variant='ghost' className="flex-row items-center py-1">
            <Icon size={18} name={expandedFolders ? 'down' : 'right'} className='pr-4' color={colors.mutedForeground} />
            <Text className='text-lg text-secondary-foreground'>{folder.name}</Text>
            </Button>
            {expandedFolders && (
            <View className="ml-6">
                {folder.requests.length === 0 && (
                <Text className="text-md text-muted-foreground italic text-secondary-foreground">No requests</Text>
                )}
                {folder.requests.map(req => (
                <RequestItem key={req.id} request={req} />
                ))}
            </View>
            )}
        </View>
        )
    }

export default FolderItem
