import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import db from "../database/database";

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        // Lakukan pemanggilan query ketika komponen dipasang
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM users",
                [],
                (_, { rows }) => {
                    // Menangkap hasil query di sini dan melakukan sesuatu dengannya jika diperlukan
                    console.log(rows);
                },
                (_, error) => {
                    console.log(
                        "Terjadi error saat mengeksekusi query:",
                        error
                    );
                }
            );
        });
    }, []);

    const handleLogin = () => {
        // Query untuk mencari username dan password yang sesuai dari database
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM users WHERE username = ? AND password = ?",
                [username, password],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        // Jika ditemukan, berarti kredensial benar
                        // Redirect ke halaman beranda atau tindakan lain yang sesuai
                        navigation.navigate("Home");
                    } else {
                        // Jika tidak ditemukan, beri peringatan bahwa kredensial tidak valid
                        alert("Invalid username or password");
                    }
                },
                (_, error) => {
                    console.log("Error while executing query:", error);
                    alert("An error occurred. Please try again.");
                }
            );
        });
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
