import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { supabase } from "./lib/supabase";
import AdminNav from "./Admin/Screens/AdminNav";

const Stack = createNativeStackNavigator();

export default function App() {
    const [session, setSession] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const listener = supabase.auth.onAuthStateChange((event, session) => {
            console.log("listener: ", event);
            if (event === "SIGNED_IN") {
                console.log("User signed in:", session.user.id);
                checkAdmin(session.user.id);
            }
            if (event === "SIGNED_OUT") {
                setSession(false);
                setIsAdmin(false);
            }
        });

        return () => {
            listener.unsubscribe();
        };
    }, []);

    const checkAdmin = (userId) => {
        const { data, error } = supabase
            .from("profile_users")
            .select("isAdmin")
            .eq("user_id", userId)
            .single()
            .then((data) => {
                setIsAdmin(data.data.isAdmin);
            })
            .then(() => {
                setSession(true);
            });
    };

    console.log("isAdmin: ", isAdmin);
    console.log("session: ", session);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {session ? (
                    isAdmin ? (
                        <Stack.Screen name="Admin" component={AdminNav} />
                    ) : (
                        <Stack.Screen name="Home" component={Home} />
                    )
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
