import "@/global.css";
import '@/i18n';
import i18n from '@/i18n';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { I18nextProvider } from 'react-i18next';

import AppStack from "@/components/AppStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Layout() {
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });
    if (!fontsLoaded) {
        SplashScreen.preventAutoHideAsync();
        return null;
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <I18nextProvider i18n={i18n}>
                <AppStack/>
            </I18nextProvider>
        </GestureHandlerRootView>
    )
}