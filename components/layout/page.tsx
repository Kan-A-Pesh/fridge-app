import { ScrollView } from "react-native";
import { Box } from "../ui/box";

interface PageProps {
    children: React.ReactNode;
    className?: string;
    scroll?: boolean;
}

export function Page({ children, className, scroll }: PageProps) {
    return (
        <Box className={"flex-1 bg-background-50 " + className}>
            {scroll ? <ScrollView>{children}</ScrollView> : children}
        </Box>
    );
}
