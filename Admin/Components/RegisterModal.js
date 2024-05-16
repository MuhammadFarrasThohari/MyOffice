import {
    View,
    Modal,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
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
                email_confirm: true,
            });

            console.log(data);
            if (error) {
                Alert.alert("Error signing up", error.message);
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

            Alert.alert("User registered successfully!");
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
                    keyboardType="email-address"
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
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={registerEmployee}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton} onPress={close}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f7",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    registerButton: {
        backgroundColor: "#1E90FF",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
        marginRight: 10,
    },
    backButton: {
        backgroundColor: "#FF6347",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        flex: 1,
        marginLeft: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default RegisterModal;
