import TabBar from "@/components/navigation/tabbar";
import { Tabs } from "expo-router";
import {
    Home,
    Refrigerator,
    ShoppingBasket,
    CookingPot,
    UserRound,
} from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="fridge"
                options={{
                    tabBarLabel: "Fridge",
                    tabBarIcon: ({ color }) => (
                        <Refrigerator size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="shopping"
                options={{
                    tabBarLabel: "Shopping",
                    tabBarIcon: ({ color }) => (
                        <ShoppingBasket size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="recipes"
                options={{
                    tabBarLabel: "Recipes",
                    tabBarIcon: ({ color }) => (
                        <CookingPot size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color }) => (
                        <UserRound size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
