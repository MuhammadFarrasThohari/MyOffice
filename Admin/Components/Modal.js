// InputModal.js
import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    Button,
    TextInput,
    Alert,
    StyleSheet,
} from "react-native";

const InputModal = ({ visibility, pressHandler, updateReview }) => {
    const [attendance, setAttendance] = useState("");
    const [qow, setQow] = useState("");
    const [reliability, setReliability] = useState("");

    const onPressClose = () => {
        pressHandler();
    };

    const onPressSave = () => {
        const invalid =
            parseInt(attendance) > 5 ||
            parseInt(qow) > 5 ||
            parseInt(reliability) > 5;

        if (invalid) {
            Alert.alert("Invalid Input", "Please input a number between 0-5", [
                {
                    text: "OK",
                    onPress: () => {
                        setAttendance("");
                        setQow("");
                        setReliability("");
                    },
                },
            ]);
        } else {
            // Kirim nilai-nilai yang diinput ke ReviewDetail
            updateReview({
                Attendance: parseInt(attendance),
                QoW: parseInt(qow),
                Reliability: parseInt(reliability),
            });
            pressHandler();
        }
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>Input Review</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Attendance</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={attendance}
                        onChangeText={(value) => setAttendance(value)}
                        placeholder="0-5"
                    />
                    <Text style={styles.label}>Quality Of Work</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={qow}
                        onChangeText={(value) => setQow(value)}
                        placeholder="0-5"
                    />
                    <Text style={styles.label}>Reliability</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={reliability}
                        onChangeText={(value) => setReliability(value)}
                        placeholder="0-5"
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Close"
                        onPress={onPressClose}
                        color="#d9534f"
                    />
                    <Button
                        title="Save"
                        onPress={onPressSave}
                        color="#5cb85c"
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: "#ced4da",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default InputModal;
