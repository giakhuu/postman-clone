import React from "react";
import { View } from "react-native";
import { ActionTitle } from "../../molecules/Action/ActionTitle";

type ActionItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
};

type Props = {
  actions: ActionItem[];
};

export function ActionGrid({ actions }: Props) {
  return (
    <View className="flex-row flex-wrap -mx-2 my-2">
      {actions.map(item => (
        <View key={item.key} className="w-1/2 p-2">
          <ActionTitle
            icon={item.icon}
            label={item.label}
            onPress={item.onPress}
          />
        </View>
      ))}
    </View>
  );
}