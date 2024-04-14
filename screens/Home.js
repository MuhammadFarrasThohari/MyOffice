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

const Home = () => {
    async function signOut() {
        const { error } = await supabase.auth.signOut();
    }
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <Button title="sign out" onPress={signOut} />
            <Card />
            <PerformanceCard />
            <TaskCard />
            <WageCard />
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
