import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const options = {
    headerShown: false,
};

export default function RootLayout() {
    return (
        <GluestackUIProvider mode="dark">
            <Stack screenOptions={options}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </GluestackUIProvider>
    );
}
