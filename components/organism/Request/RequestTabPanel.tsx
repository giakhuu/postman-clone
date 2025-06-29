import { Text } from '@/components/ui';
import { HttpRequest } from '@/model/request/Request';
import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import RequestBodyTabContent from './tab/RequestBodyTabContent/RequestBodyTabContent';


interface RequestTabPanelProps {
  request: HttpRequest
}

const requestTabs = {
  Params:   { label: "Params" },
  Auth:     { label: "Auth" },
  Headers:  { label: "Headers" },
  Body:     { label: "Body" },
  Scripts:  { label: "Scripts" },
  Settings: { label: "Settings" },
  Cookies:  { label: "Cookies" }
};

const RequestTabPanel: React.FC<RequestTabPanelProps> = ({request}) => {
  const [activeTab, setActiveTab] = useState(requestTabs.Headers);
  return (
    <View className="flex-1">
        <View className="bg-accent mt-2 rounded-lg">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 4 }}
            >
                {Object.values(requestTabs).map((tab, index) => (
                <TouchableWithoutFeedback key={index} onPress={() => setActiveTab(tab)}>
                    <View className={`px-2 py-2 rounded ${tab === activeTab ? 'bg-background' : 'bg-transparent'}`}>
                    <Text className={tab === activeTab ? 'text-primary' : 'text-accent-foreground'}>{tab.label}</Text>
                    </View>
                </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
        {/* Nội dung tab sẽ render ở đây */}
        <View className="py-4 flex-1">
            <RequestBodyTabContent />
        </View>
    </View>
  );
};

export default RequestTabPanel;
