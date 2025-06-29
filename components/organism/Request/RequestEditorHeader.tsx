import { Input } from '@/components/ui';
import { HttpRequest } from '@/model/request/Request';
import React from 'react';
import { View } from 'react-native';

interface RequestEditorHeaderProps {
  request: HttpRequest
}

const RequestEditorHeader: React.FC<RequestEditorHeaderProps> = ( {request} ) => {
  
  
  return (
    <View className="flex-row mb-2">

      <Input className="flex-1 ml-2" />
    </View>
  );
};

export default RequestEditorHeader;
