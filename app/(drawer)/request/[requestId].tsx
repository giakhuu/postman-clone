import RequestEditorActions from '@/components/organism/Request/RequestEditorActions';
import RequestEditorHeader from '@/components/organism/Request/RequestEditorHeader';
import RequestTabPanel from '@/components/organism/Request/RequestTabPanel';
import React from 'react';
import { View } from 'react-native';

export default function RequestTabScreen() {
    return (
        <View className="p-2 bg-background flex-1">
            <RequestEditorHeader />
            <RequestEditorActions />
            <RequestTabPanel />
        </View>
    );
}



