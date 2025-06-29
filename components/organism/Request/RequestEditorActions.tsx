import { Button, Icon, Text } from '@/components/ui';
import { HttpRequest } from '@/model/request/Request';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { View } from 'react-native';

interface RequestEditorActionsProps {
  request: HttpRequest
}

const RequestEditorActions: React.FC<RequestEditorActionsProps> = ({request}) => {
  return (
    <>
      <Button className="mt-2 flex-row items-center justify-center">
        <Text className="mr-4">Send</Text>
        <Icon as={FontAwesome} name="send" />
      </Button>
      <View className="flex-row mt-2">

        <Button variant="outline">
          <Icon as={Feather} name="save" />
          <Text className="ml-2">Save</Text>
        </Button>
      </View>
    </>
  );
};

export default RequestEditorActions;
