import React from 'react';
import { View } from 'react-native';
import RequestEditorActions from './RequestEditorActions';
import RequestEditorHeader from './RequestEditorHeader';
import RequestTabPanel from './RequestTabPanel';
const RequestEditor: React.FC = () => {
  return (
    <View className="p-2 bg-background flex-1">
      <RequestEditorHeader />
      <RequestEditorActions />
      <RequestTabPanel />
    </View>
  );
};

export default RequestEditor;
