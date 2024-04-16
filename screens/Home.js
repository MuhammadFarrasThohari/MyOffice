import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Performance from "./PerformanceDetail";
import { getNilai } from "../data/data";
import Home from "./HomePage";
import TaskDetail from "./TaskDetail";

const Tab = createBottomTabNavigator();

function MyTabs() {
    const [reviewLong, setReviewLong] = useState("");
    const [reviewPendek, setReviewShort] = useState("");
    const [Attendance, setAttendance] = useState(0);
    const [Reliability, setReliability] = useState(0);
    const [QoL, setQol] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getNilai();
                const { short_review, full_review, nilai, user_id } = data;
                setReviewShort(short_review);
                setReviewLong(full_review);
                setAttendance(nilai.attendance);
                setReliability(nilai.Reliability);
                setQol(nilai.QoL);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{ headerShown: false }}>
                {() => (
                    <Home
                        reviewShort={reviewPendek}
                        nilaiAttendance={Attendance}
                        nilaiReliability={Reliability}
                        nilaiQoL={QoL}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="Performance" options={{ headerShown: false }}>
                {() => (
                    <Performance
                        full_review={reviewLong}
                        nilaiAttendance={Attendance}
                        nilaiReliability={Reliability}
                        nilaiQoL={QoL}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen name="TaskDetail" options={{ headerShown: false }}>
                {() => <TaskDetail />}
            </Tab.Screen>
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
