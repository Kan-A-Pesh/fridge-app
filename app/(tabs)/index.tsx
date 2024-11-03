import { Page } from "@/components/layout/page";
import { Text } from "@/components/ui/text";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabIndex() {
    return (
        <Page scroll className="p-4">
            <SafeAreaView edges={["top"]}>
                <Text className="text-5xl font-bold text-white">
                    Good morning, username!
                </Text>
                <Text className="text-2xl">Let's cook something</Text>
                <FlatList
                    horizontal
                    data={[]}
                    snapToAlignment="center"
                    renderItem={() => null}
                    keyExtractor={() => ""}
                />
            </SafeAreaView>
        </Page>
    );
}
