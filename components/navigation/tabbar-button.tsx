import { Pressable, StyleSheet } from "react-native";
import React, { ReactNode, useEffect } from "react";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

export interface TabBarButtonProps {
    isFocused: boolean;
    label: string;
    color: string;
    icon?: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => ReactNode;
    onPress: () => void;
    onLongPress?: () => void;
}

export default function TabBarButton(props: TabBarButtonProps) {
    const { isFocused, label, color, icon } = props;

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
            { duration: 350 }
        );
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
        const top = interpolate(scale.value, [0, 1], [0, 8]);

        return {
            // styles
            transform: [{ scale: scaleValue }],
            top,
        };
    });
    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);

        return {
            // styles
            opacity,
        };
    });
    return (
        <Pressable {...props} style={styles.container}>
            <Animated.View style={[animatedIconStyle]}>
                {icon && icon({ color, focused: isFocused, size: 24 })}
            </Animated.View>

            <Animated.Text
                style={[
                    {
                        color,
                        fontSize: 11,
                    },
                    animatedTextStyle,
                ]}>
                {label}
            </Animated.Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    },
});