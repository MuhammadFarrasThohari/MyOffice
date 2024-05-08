import { View, Modal, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { supabase } from "../supabaseAdmin";

const RegisterModal = ({ visible, close }) => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");

    const registerEmployee = async () => {
        try {
            const { data, error } = await supabase.auth.admin.createUser({
                email: employeeEmail,
                password: employeePassword,
            });

            console.log(data);
            if (error) {
                console.error("Error signing up:", error.message);
                return;
            }

            // Add user profile to the database
            const { error: profileError } = await supabase
                .from("profile_users")
                .insert([
                    {
                        user_id: data.user.id,
                        nama_users: employeeName,
                        jabatan_users: employeeRole,
                        isAdmin: false,
                    },
                ]);

            if (profileError) {
                console.error(
                    "Error creating user profile:",
                    profileError.message
                );
                return;
            }

            console.log("User registered successfully!");
            close(); // Close the modal after successful registration
        } catch (error) {
            console.error("Error registering employee:", error.message);
        }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>Register Employee</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Name"
                    value={employeeName}
                    onChangeText={setEmployeeName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Email"
                    value={employeeEmail}
                    onChangeText={setEmployeeEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Password"
                    value={employeePassword}
                    onChangeText={setEmployeePassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Employee Role"
                    value={employeeRole}
                    onChangeText={setEmployeeRole}
                />
                <Button title="Register" onPress={registerEmployee} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default RegisterModal;
