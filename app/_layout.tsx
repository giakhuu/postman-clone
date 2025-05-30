import "@/global.css";
import '@/i18n';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

import AppStack from "@/components/AppStack";
export default function Layout() {
    return (
        <I18nextProvider i18n={i18n}>
            <AppStack/>
        </I18nextProvider>
    )
}