
import { HttpMethod } from '@/lib/enum/HttpMethod';
import getMethodColor from '@/lib/utils/RequestMethod';
import React from 'react';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface TagProps {
  method: HttpMethod;
  className?: string;
  variant?: 'default' | 'noBackground';
}



const Tag: React.FC<TagProps> = ({ method, className = "", variant = 'default' }) => {
  const color = getMethodColor(method);

  return (
    <View
      className={twMerge("px-2 py-1 rounded-full", className)}
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
