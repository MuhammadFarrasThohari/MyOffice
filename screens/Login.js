import { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from "react-native";
import { supabase } from "../lib/supabase";
import Constant from "expo-constants";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state untuk render (tampilin) <ActivityIndicator> Component

    async function signIn() {
        setIsLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                Alert.alert("Login Gagal", error.message, [{ text: "OK" }]);
            } else {
                console.log("Login successful:", data);
            }
        } catch (error) {
            console.error("Login error:", error); // Log error for debugging
            Alert.alert("Login Gagal", error.message, [{ text: "OK" }]); // Inform user about the error
        } finally {
            setIsLoading(false); // Set loading state to false regardless of success or failure
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.judulText}>MyOffice</Text>
            <View style={styles.loginCard}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput
                    style={styles.placeholderText}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.placeholderText}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={signIn} color="#CFD6FF" />
            </View>
            {isLoading && <ActivityIndicator size="large" color="#CFD6FF" />}
        </View>
    );
};

const styles = StyleSheet.create({
    judulText: {
        textAlign: "center",
        color: "white",
        fontSize: 50,
    },
    loginText: {
        textAlign: "center",
        marginVertical: 5,
        fontSize: 25,
        fontWeight: "normal",
    },
    placeholderText: {
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
    },
    container: {
        flex: 1,
        backgroundColor: "#070F2B",
        justifyContent: "center",
    },
    loginCard: {
        marginVertical: 15,
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
    },
});

export default Login;
