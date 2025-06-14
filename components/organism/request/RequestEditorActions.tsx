import DropDownPick from '@/components/molecules/CustomButton/DropDownPick';
import { Button, Icon, Text } from '@/components/ui';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { View } from 'react-native';

const RequestEditorActions: React.FC = () => {
  return (
    <>
      <Button className="mt-2 flex-row items-center justify-center">
        <Text className="mr-4">Send</Text>
        <Icon as={FontAwesome} name="send" />
      </Button>
      <View className="flex-row mt-2">
        <DropDownPick
          items={[
            { label: 'Production', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          containerClassName="flex-1 mr-2"
        />
        <Button variant="outline">
          <Icon as={Feather} name="save" />
          <Text className="ml-2">Save</Text>
        </Button>
      </View>
    </>
  );
};

export default RequestEditorActions;
