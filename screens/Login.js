import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "admin") {
            // Redirect to another screen using navigation
            navigation.navigate("Home"); // Ganti "Home" dengan nama halaman tujuan Anda
        } else {
            // Handle invalid credentials
            alert("Invalid username or password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.judulText}> MyOffice </Text>
            <View style={styles.loginCard}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput
                    style={styles.placeholderText}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.placeholderText}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={handleLogin} color="#CFD6FF" />
            </View>
        </View>
    );
};

export default Login;

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
