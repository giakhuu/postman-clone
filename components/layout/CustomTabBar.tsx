import { Icon, Text } from '@/components/ui';
import { useTabStore } from '@/hooks/useTabStore';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useRouter } from 'expo-router';
import React, { memo } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Tag from '../molecules/Request/Tag';

export const CustomTabBar = memo(() => {
  const { tabs, activeTabId, removeTab, setActiveTab } = useTabStore();
  const colors = useThemeColors();
  const router = useRouter();
  return (
    <View className="bg-background border-b border-border">
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          height: 40,
          alignItems: 'center',
        }}
      >
        {tabs.map((tab) => {
          const isFocused = activeTabId === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => {
                setActiveTab(tab.id)
                router.navigate(`/(drawer)/request/${tab.requestId}`)
              }}
              className={`
                flex-row items-center mx-1 px-3 py-1.5 rounded-md
                ${isFocused ? 'bg-secondary border border-border' : 'border border-transparent'}
              `}
            >
              <Tag method={tab.method} className='mx-2' ></Tag>
              <Text
                className={`
                  ${isFocused ? 'text-secondary-foreground font-semibold' : 'text-primary font-normal'}
                `}
              >
                {tab.name}
              </Text>
              <TouchableOpacity
                onPress={() => removeTab(tab.id)}
                className="ml-2 p-0.5"
              >
                <Icon 
                  name="close" 
                  size={14}
                  color={colors.mutedForeground}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
});