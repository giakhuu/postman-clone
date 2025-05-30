
import { HttpMethod } from '@/lib/enum/HttpMethod';
import getMethodColor from '@/lib/utils/RequestMethod';
import React from 'react';
import { Text, View } from 'react-native';

interface TagProps {
  method: HttpMethod;
}

const Tag: React.FC<TagProps> = ({ method }) => {
  const color = getMethodColor(method);

  return (
    <View
      className="px-2 py-1 rounded-full"
      style={{
        backgroundColor: `${color}33`, 
      }}
    >
      <Text
        className="text-xs font-semibold"
        style={{
          color: color,
        }}
      >
        {method}
      </Text>
    </View>
  );
};

export default Tag;
