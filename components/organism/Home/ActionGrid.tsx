import { Button, Text } from "@/components/ui";
import { View } from "react-native";


export type HomeAction = {
  key: string;
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
};

type ActionGridProps = {
  actions: HomeAction[];
};

export function ActionGrid({ actions }: ActionGridProps) {
  return (
    <View className="flex-row flex-wrap -mx-2 my-2">
      {actions.map((item) => (
        <View key={item.key} className="w-1/2 p-2">
          <Button
            onPress={item.onPress}
            variant="outline"
            className="w-full flex-col items-center justify-center shadow-lg"
          >
            <View className="m-4">{item.icon}</View>
            <Text className="font-semibold text-lg">{item.label}</Text>
          </Button>
        </View>
      ))}
    </View>
  );
}