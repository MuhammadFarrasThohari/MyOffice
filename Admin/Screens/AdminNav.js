import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminScreen from "./AdminScreen";
import { ProfileProvider } from "../../data/ProfileContext";
import ReviewNav from "./ReviewNav";
import { EmployeeProvider } from "../../data/EmployeeContext";
import WageScreen from "./WageScreen";
import { EmployeeWageProvider } from "../../data/GajiContext";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons dari expo vector icons

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "white",
                tabBarLabelStyle: styles.tabBarLabel,

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Admin Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Review Employee") {
                        iconName = focused ? "list" : "list-outline";
                    } else if (route.name === "Wage Employee") {
                        iconName = focused ? "cash" : "cash-outline";
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen name="Admin Home" options={{ headerShown: false }}>
                {() => <AdminScreen />}
            </Tab.Screen>
            <Tab.Screen name="Review Employee" options={{ headerShown: false }}>
                {() => <ReviewNav />}
            </Tab.Screen>
            <Tab.Screen name="Wage Employee" options={{ headerShown: false }}>
                {() => <WageScreen />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const AdminNav = () => {
    return (
        <EmployeeProvider>
            <EmployeeWageProvider>
                <ProfileProvider>
                    <NavigationContainer independent={true}>
                        <MyTabs />
                    </NavigationContainer>
                </ProfileProvider>
            </EmployeeWageProvider>
        </EmployeeProvider>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#1B1A55", // warna background tab bar
    },
    tabBarLabel: {
        fontSize: 12, // ukuran font label
    },
});
export default AdminNav;
