import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { supabase } from "./lib/supabase";

const Stack = createNativeStackNavigator();

export default function Router() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const listener = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event);
            if (event === "SIGNED_IN") {
                setSession(session);
            }
            if (event === "SIGNED_OUT") {
                setSession(null);
            }
        });

        return () => {
            listener.unsubscribe();
        };
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {session ? (
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
