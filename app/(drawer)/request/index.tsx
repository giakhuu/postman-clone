import { CustomTabBar } from '@/components/organism/Request/CustomTabBar';
import { useTabStore } from '@/hooks/useTabStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

const RequestIndex = () => {
  const router = useRouter();
  const { tabs, activeTabId } = useTabStore();

  useEffect(() => {
    if (tabs.length === 0) {
      router.navigate("/(drawer)/home");
    }
  }, [tabs.length, router]);

  return (
    <View className="flex-1">
      <CustomTabBar />
      {tabs.map(tab => (
        <View
          key={tab.id}
          style={{ display: tab.id === activeTabId ? 'flex' : 'none' }}
          className='flex-1'
        >
          {tab.content}
        </View>
      ))}
    </View>
  );
};

export default RequestIndex;
