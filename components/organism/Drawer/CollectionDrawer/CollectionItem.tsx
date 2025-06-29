import Dropdown, { DropdownHandle } from '@/components/molecules/Dropdown/Dropdown'
import TextToInput, { TextToInputHandle } from '@/components/molecules/TextToInput/TextToInput'
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
    const { loadCollection, updateCollection } = useCollectionStorage()
    const { addFolder } = useFolderStorage()

    const dropdownRef = useRef<DropdownHandle>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const textToInputRef = useRef<TextToInputHandle>(null);

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

    const handleRenameRequest = () => {
        textToInputRef.current?.startEditing()
    }
    const handleRenameSave = (newName: string) => {
        collection.name = newName
        updateCollection(collection)
    }
    const dropdownButton = [
        {
            label: "Add Request",
            onPress: handdleAddRequest
        },
        {
            label: "Add Folder",
            onPress: handdleAddRequest
        },
        {
            label: "Delete",
            onPress: handdleAddRequest
        },
        {
            label: "Rename",
            onPress: handleRenameRequest
        }
    ]



    return (
        <View className="mb-2 bg-secondary rounded-lg p-4 shadow-sm border border-muted" style={{ zIndex: isDropdownOpen ? 9999 : 1 }}>
            <View className='flex-row items-center'>
                <Icon name={'folder1'} className='pl-2 pr-4' color={colors.mutedForeground}/>
                <TextToInput 
                    textClassName="font-semibold mb-1 text-secondary-foreground flex-1"
                    initial={collection.name}
                    onSave={(v) => {handleRenameSave(v)}}
                    inputClassName="flex-1"
                    ref={textToInputRef}
                />
                
                <Dropdown
                    ref={dropdownRef}
                    onOpen={() => setIsDropdownOpen(!isDropdownOpen)}
                    onClose={() => setIsDropdownOpen(!isDropdownOpen)}
                    dropdownClassName='min-w-[160]'
                    trigger={(open) => (
                        <Icon name="ellipsis1" className="item" color={colors.mutedForeground} />
                    )}
                >
                    {dropdownButton.map((button, idx) => {
                        return (
                            <Button
                                key={button.label}
                                onPress={button.onPress}
                                variant="ghost"
                            >
                                <Text>{button.label}</Text>
                            </Button>
                        )
                    })}
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
