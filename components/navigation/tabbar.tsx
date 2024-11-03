import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarButton from "./tabbar-button";
import { Box } from "../ui/box";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const primaryColor = "#E78128";
    const greyColor = "#525252";

    return (
        <Box className="absolute bottom-0 w-full bg-background-0">
            <SafeAreaView edges={["bottom"]}>
                <Box className="flex-row items-center justify-between pt-4">
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                  ? options.title
                                  : route.name;

                        if (["_sitemap", "+not-found"].includes(route.name))
                            return null;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: "tabPress",
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name, route.params);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: "tabLongPress",
                                target: route.key,
                            });
                        };

                        return (
                            <TabBarButton
                                key={route.name}
                                // style={styles.tabbarItem}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                isFocused={isFocused}
                                // routeName={route.name}
                                icon={options.tabBarIcon}
                                color={isFocused ? primaryColor : greyColor}
                                label={label as string}
                            />
                        );

                        // return (
                        //   <TouchableOpacity
                        //     key={route.name}
                        //     style={styles.tabbarItem}
                        //     accessibilityRole="button"
                        //     accessibilityState={isFocused ? { selected: true } : {}}
                        //     accessibilityLabel={options.tabBarAccessibilityLabel}
                        //     testID={options.tabBarTestID}
                        //     onPress={onPress}
                        //     onLongPress={onLongPress}
                        //   >
                        //     {
                        //         icons[route.name]({
                        //             color: isFocused? primaryColor: greyColor
                        //         })
                        //     }
                        //     <Text style={{
                        //         color: isFocused ? primaryColor : greyColor,
                        //         fontSize: 11
                        //     }}>
                        //       {label}
                        //     </Text>
                        //   </TouchableOpacity>
                        // );
                    })}
                </Box>
            </SafeAreaView>
        </Box>
    );
}
