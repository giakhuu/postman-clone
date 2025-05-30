import { Button, Text } from "@/components/ui";
import { View } from "react-native";
type Props = {
    icon: React.ReactNode;
    label: string;
    onPress: () => void;
}

export const ActionTitle: React.FC<Props> = ({ icon, label, onPress }) => {
    return (
        <Button
            onPress={onPress}
            variant="outline"
            className="w-full flex-col items-center justify-center shadow-lg"
        >
            <View className="m-4">
                {icon}
            </View>
            <Text className="font-semibold text-lg">{label}</Text>
        </Button>
    );
}