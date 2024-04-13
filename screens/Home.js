import React from "react";
import { View } from "react-native";
import Card from "../components/Card";
import PerformanceCard from "../components/PerformanceCard";
import TaskCard from "../components/TaskCard";
import WageCard from "../components/WageCard";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";
import { supabase } from "../lib/supabase";

const Tab = createBottomTabNavigator();

// async function getUserData() {
//     try {
//         const { data, error } = await supabase.auth.getSession();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching user data:", error.message);
//     }
// }

const fetchData = async () => {
    try {
        const { data, error } = await supabase.from("test").select();
        if (error) {
            throw error;
        }
        console.log(data[0]);
    } catch (error) {
        console.error("Error fetching wage data:", error.message);
    }
};

const Home = () => {
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <Card />
            <PerformanceCard />
            <TaskCard />
            <WageCard />
            <Button title="test" onPress={fetchData} />
        </View>
    );
};

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} // menghilangkan header
            />
        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
};

export default AppNavigator;
