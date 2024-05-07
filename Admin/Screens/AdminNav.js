import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminScreen from "./AdminScreen";
import { ProfileProvider } from "../../data/ProfileContext";
import ReviewNav from "./ReviewNav";
import { EmployeeProvider } from "../../data/EmployeeContext";
import WageScreen from "./WageScreen";
import { EmployeeWageProvider } from "../../data/GajiContext";

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

export default AdminNav;
