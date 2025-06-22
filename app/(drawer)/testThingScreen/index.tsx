import { Button, Input, Text } from '@/components/ui';
import Dropdown, { DropdownHandle } from '@/components/ui/Dropdown';
import { useCollectionStorage } from '@/hooks/useCollectionStorage';
import { Collection } from '@/model/collection/Collection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';

const index = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const { collections, loadAllCollections } = useCollectionStorage();

    useEffect(() => {
        loadAllCollections();
    }, []);

    const handleDelete = async () => {
        if (!id) {
        setMessage('Please enter a collection id');
        return;
        }
        try {
        await AsyncStorage.removeItem(`collection_${id}`);
        setMessage(`Deleted collection with id: ${id}`);
        setId('');
        } catch (e) {
        setMessage('Error deleting collection');
        }
    };

    const handleShowAll = () => {
        printCollections(collections);
    };


    return (
        <View className="flex-1 p-4 bg-background">
        <Text className="mb-2 text-lg font-semibold">Delete Collection by ID</Text>
        <Input
            placeholder="Enter collection id"
            value={id}
            onChangeText={setId}
            className="mb-4 w-full"
        />
        <Button
            className="w-full my-2"
            variant="destructive"
            onPress={handleDelete}
        >
            <Text>Delete</Text>
        </Button>

        <Button
            className="w-full my-2"
            onPress={handleShowAll}
        >
            <Text>ShowAllCollection</Text>
        </Button>
        {message ? <Text className="mt-4 text-center">{message}</Text> : null}

        {/* // Dropdơwn Test */}
        <DropDownTest />

      <Pressable
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        <Text className="text-white">Toggle from outside</Text>
      </Pressable>
        </View>
    );
};

// Hàm in ra collection (log ra console)
export function printCollections(collections: Collection[]) {
  collections.forEach((c, idx) => {
    console.log(`Collection #${idx + 1}:`);
    console.log('  id:', c.id);
    console.log('  name:', c.name);
    console.log('  description:', c.description);
    console.log('  requests:', c.requests);
    console.log('  folder:', c.folders); // Đúng với model của bạn
  });
}
function DropDownTest() {
  const dropdownRef = useRef<DropdownHandle>(null);
  const [value, setValue] = useState<string>();
  const items = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ];

  return (
    <View className='relative'>
      <Dropdown
        ref={dropdownRef}
        onOpen={() => console.log("opened")}
        onClose={() => console.log("closed")}
        containerClassName="w-64"
        dropdownClassName="max-h-60"
        trigger={(open) => (
          <View className="flex-row justify-between items-center border border-gray-400 rounded px-4 py-3 bg-white">
            <Text className="text-gray-800">{value ?? "Chọn mục"}</Text>
            <Text className="text-gray-500">{open ? "▲" : "▼"}</Text>
          </View>
        )}
      >
        {items.map(item => (
          <Pressable
            key={item.value}
            className="px-4 py-3 hover:bg-gray-200"
            onPress={() => {
              setValue(item.value);
              dropdownRef.current?.closeDropdown();
              console.log(item.value)
            }}
          >
            <Text className="text-gray-800">{item.label}</Text>
          </Pressable>
        ))}
      </Dropdown>
    </View>
  );
}


export default index;
