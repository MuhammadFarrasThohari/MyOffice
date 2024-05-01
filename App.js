import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import AdminHome from "./Admin/Screens/AdminHome";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

export default function App() {
    const [session, setSession] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        const listener = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (event === "SIGNED_IN") {
                    console.log("User signed in:", session.user.id);
                    const adminStatus = await checkIsAdmin(session.user.id);
                    setIsAdmin(adminStatus);
                    setSession(session);
                }
                if (event === "SIGNED_OUT") {
                    setSession(null);
                    setIsAdmin(false);
                }
            }
        );

        return () => {
            listener.unsubscribe();
        };
    }, []);

    const checkIsAdmin = async (userId) => {
        try {
            const { data, error } = await supabase
                .from("profile_users")
                .select("isAdmin")
                .eq("user_id", userId)
                .single();
            if (error) {
                console.error("Error fetching profile:", error.message);
                return false;
            } else {
                console.log("Check is Admin", data.isAdmin);
                return data.isAdmin;
            }
        } catch (error) {
            console.error("Error fetching profile:", error.message);
            return false;
        }
    };

    console.log(isAdmin);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {session ? (
                    isAdmin !== null ? (
                        isAdmin ? (
                            <Stack.Screen
                                name="AdminHome"
                                component={AdminHome}
                            />
                        ) : (
                            <Stack.Screen name="Home" component={Home} />
                        )
                    ) : null
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
