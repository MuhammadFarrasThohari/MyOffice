import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import { addTask } from "../data/data";
import { useTask } from "../data/Context";

const InputModal = ({ visibility, pressHandler }) => {
    const [task, setTask] = useState("");
    const { handleTaskCheck } = useTask();

    const onPressClose = () => {
        pressHandler();
    };

    const onPressSave = async () => {
        if (task.trim() === "") {
            Alert.alert("Error", "Task cannot be empty!");
            return;
        }

        const task_baru = await addTask(task);
        handleTaskCheck(
            task_baru[0].task_id,
            task_baru[0].is_done,
            (newTask = task_baru[0])
        );

        Alert.alert("Success", "Task has been added successfully!");
        setTask(""); // Reset input field
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View style={styles.modalContent}>
                <Text style={styles.title}>Input Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukkan Task Disini"
                    value={task}
                    onChangeText={(value) => setTask(value)}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressClose}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                        onPress={onPressSave}
                    >
                        <Text
                            style={[styles.buttonText, styles.saveButtonText]}
                        >
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: "45%",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    saveButton: {
        backgroundColor: "#4B7BEC",
    },
    saveButtonText: {
        color: "#fff",
    },
});

export default InputModal;
