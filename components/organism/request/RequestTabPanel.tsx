import { Text } from '@/components/ui';
import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { RequestAuthTabContent } from './tab/RequestAuthTabContent/RequestAuthTabContent';

const requestTabs = {
  Params:   { label: "Params" },
  Auth:     { label: "Auth" },
  Headers:  { label: "Headers" },
  Body:     { label: "Body" },
  Scripts:  { label: "Scripts" },
  Settings: { label: "Settings" },
  Cookies:  { label: "Cookies" }
};

const RequestTabPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState(requestTabs.Headers);
  return (
    <View className="">
        <View className="bg-accent mt-2 rounded-lg">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 4 }}
            >
                {Object.values(requestTabs).map((tab, index) => (
                <TouchableWithoutFeedback key={index} onPress={() => setActiveTab(tab)}>
                    <View className={`px-2 py-2 rounded ${tab === activeTab ? 'bg-background' : 'bg-transparent'}`}>
                    <Text className="text-accent-foreground">{tab.label}</Text>
                    </View>
                </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
        {/* Nội dung tab sẽ render ở đây */}
        <View className="py-4">
            <RequestAuthTabContent />
        </View>
    </View>
  );
};

export default RequestTabPanel;
