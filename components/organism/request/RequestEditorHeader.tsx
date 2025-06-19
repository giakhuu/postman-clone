import DropDownPick from '@/components/molecules/CustomButton/DropDownPick';
import { Input } from '@/components/ui';
import { HttpMethod } from '@/lib/enum/HttpMethod';
import React from 'react';
import { View } from 'react-native';

const RequestEditorHeader: React.FC = () => {
  return (
    <View className="flex-row mb-2">
      <DropDownPick
        items={Object.values(HttpMethod).map(method => ({
          label: method.charAt(0).toUpperCase() + method.slice(1),
          value: method,
        }))}
        value={HttpMethod.GET}
      />
      <Input className="flex-1 ml-2" />
    </View>
  );
};

export default RequestEditorHeader;
