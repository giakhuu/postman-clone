import { Icon, Text } from "@/components/ui";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View } from "react-native";

type QuickTipProps = {
    tip: string;
};

export const QuickTip: React.FC<QuickTipProps> = ({ tip }: QuickTipProps) => {
    const colors = useThemeColors();
    return (
        <View className="bg-secondary p-4 rounded-lg shadow-md my-4 flex-row">
            <Icon name = "bulb1" color={colors.mutedForeground}/>
            <View className="ml-3 flex-1">
                <Text className="text-lg text-muted-foreground mb-2">Quick Tip</Text>
                <Text className="text-muted-foreground">
                    {tip || "Use the search bar to quickly find APIs or endpoints."}
                </Text>
            </View>
        </View>
    );
}