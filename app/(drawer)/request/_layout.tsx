import { CustomTabBar } from '@/components/layout/CustomTabBar';
import { Stack } from 'expo-router';
import { View } from 'react-native';


export default function RequestTabsLayout() {
  return (
    <View className="flex-1">
      <CustomTabBar /> 
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
