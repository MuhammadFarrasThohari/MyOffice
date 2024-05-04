import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminScreen from "./AdminScreen";
import { ProfileProvider } from "../../data/ProfileContext";
import ReviewNav from "./ReviewNav";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Admin Home" options={{ headerShown: false }}>
                {() => <AdminScreen />}
            </Tab.Screen>
            <Tab.Screen name="Review Employee" options={{ headerShown: false }}>
                {() => <ReviewNav />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const AdminNav = () => {
    return (
        <ProfileProvider>
            <NavigationContainer independent={true}>
                <MyTabs />
            </NavigationContainer>
        </ProfileProvider>
    );
};

export default AdminNav;
