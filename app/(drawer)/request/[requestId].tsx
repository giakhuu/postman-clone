import DropDownPick from '@/components/molecules/CustomButton/DropDownPick';
import { Button, Icon, Input, Text } from '@/components/ui';
import { HttpMethod } from '@/lib/enum/HttpMethod';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { View } from 'react-native';

export default function RequestTabScreen() {

    return (
      <View className='p-2'>
          <View
            className="flex-row bg-background"
          >
            <DropDownPick
              items={Object.values(HttpMethod).map(method => ({
                label: method.charAt(0).toUpperCase() + method.slice(1),
                value: method,
              }))}
              value={HttpMethod.GET}
              // onChange={setSelectedValue}
            />
            <Input
              className='flex-1 ml-2'
            />
          </View>

          <Button className='mt-2 flex-row items-center justify-center'>
            <Text className='mr-4'>Send</Text>
            <Icon as={FontAwesome} name="send" />
          </Button>

          <View className='flex-row mt-2' >
            <DropDownPick
              items={[
                { label: 'Production', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },]}
              containerClassName='flex-1 mr-2'
            >

            </DropDownPick>
            <Button variant="outline">
              <Icon as={Feather} name='save'></Icon>
              <Text className='ml-2'>Save</Text>
            </Button>
          </View>

      </View>
    );
}
