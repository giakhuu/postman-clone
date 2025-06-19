// theme/useThemeColors.ts
import { darkColors, lightColors } from "@/constants/Colors"; // Giả sử bạn đã định nghĩa lightColors và darkColors trong theme/colors.ts
import { useColorScheme } from "react-native";

export const useThemeColors = () => {
  const scheme = useColorScheme(); // 'light' | 'dark'
  return scheme === "dark" ? darkColors : lightColors;
};
