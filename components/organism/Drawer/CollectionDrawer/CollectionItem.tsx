import Dropdown, { DropdownHandle } from '@/components/molecules/Dropdown/Dropdown'
import { Button, Icon, Text } from '@/components/ui'
import Divider from '@/components/ui/Divider'
import { useCollectionStorage } from '@/hooks/useCollectionStorage'
import { useFolderStorage } from '@/hooks/useFolderStorage'
import { useRequestStorage } from '@/hooks/useRequestStorage'
import { useThemeColors } from '@/hooks/useThemeColors'
import { HttpMethod } from '@/lib/enum/HttpMethod'
import { Collection } from '@/model/collection/Collection'
import { Folder } from '@/model/folder/Folder'
import { HttpRequest } from '@/model/request/Request'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import FolderItem from './FolderItem'
import RequestItem from './RequestItem'

interface CollectionItemProps {
  collection: Collection
}

const CollectionItem: React.FC<CollectionItemProps> = ({ collection }) => {
    const colors = useThemeColors()
    const [collectionState, setCollection] = useState<Collection>(collection)
    const { addRequest} = useRequestStorage()
    const { loadCollection } = useCollectionStorage()
    const { addFolder } = useFolderStorage()
    const handdleAddRequest = async () => {
        await addRequest(new HttpRequest(Date.now().toString(), "New Request", HttpMethod.GET, collection.id));
        const newCollection = await loadCollection(collection.id);
        if (newCollection) {
            setCollection(newCollection);
        }
    };

    const handdleAddFolder = async () => {
        await addFolder(new Folder(Date.now().toString(), collection.id, "New Folder"));
        const newCollection = await loadCollection(collection.id);
        if (newCollection) {
            setCollection(newCollection);
        }
    };

    const dropdownRef = useRef<DropdownHandle>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <View className="mb-2 bg-secondary rounded-lg p-4 shadow-sm border border-muted" style={{ zIndex: isDropdownOpen ? 9999 : 1 }}>
            <View className='flex-row items-center'>
                <Icon name={'folder1'} className='pl-2 pr-4' color={colors.mutedForeground}/>
                <Text className="font-semibold mb-1 text-secondary-foreground flex-1">{collection.name}</Text>
                <Dropdown
                    ref={dropdownRef}
                    onOpen={() => setIsDropdownOpen(!isDropdownOpen)}
                    onClose={() => setIsDropdownOpen(!isDropdownOpen)}
                    dropdownClassName='min-w-[240]'
                    trigger={(open) => (
                        <Icon name="plus" className="ml-auto" color={colors.mutedForeground} />
                    )}
                >
                    <Button variant='ghost' onPress={handdleAddFolder} >
                        <Text>Add Folder</Text>
                    </Button>
                    <Button variant='ghost' onPress={handdleAddRequest}>
                        <Text>Add Request</Text>
                    </Button>
                </Dropdown>
            </View>
            
            <Divider/>
            {collectionState.folders.map(folder => (
                <FolderItem
                    key={folder.id}
                    folder={folder}
                />
            ))}

            {collectionState.requests.map(req => (
                <RequestItem key={req.id} request={req} />
            ))}
        </View>
    )
}

export default CollectionItem
