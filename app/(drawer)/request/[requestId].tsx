import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function RequestTabScreen() {
  const { requestId } = useLocalSearchParams();
  console.log('RequestTabScreen');


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Request: {requestId}</Text>
    </View>
  );
}
