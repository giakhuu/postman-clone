import { CustomTabBar } from '@/components/organism/Request/CustomTabBar';
import { useTabStore } from '@/hooks/useTabStore';
import React from 'react';
import { View } from 'react-native';

const index = () => {
  const {tabs, activeTabId} = useTabStore()
  return (
    <View className="flex-1">
      <CustomTabBar /> 
      {tabs.map(tab => (
          <View
            key={tab.id}
            style={[{ display: tab.id === activeTabId ? 'flex' : 'none' }]}
            className='flex-1'
            
          >
            {tab.content}
          </View>
        ))}
    </View>
  );
}

export default index