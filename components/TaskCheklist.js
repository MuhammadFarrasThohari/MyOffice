import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons"; // Pastikan Anda telah menginstal paket ini

const TaskChecklist = ({ judul, id, isChecked, onTaskCheck, onDelete }) => {
    const handleTaskCheck = () => {
        // Panggil fungsi onTaskCheck saat kotak tugas diperiksa
        onTaskCheck(id, !isChecked);
        console.log(id, isChecked);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.rowCard}>
                <View style={styles.content}>
                    <Text style={styles.taskText}>{judul}</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        isChecked={isChecked}
                        onPress={handleTaskCheck} // Panggil handleTaskCheck saat kotak diperiksa
                        fillColor="#4B7BEC"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "#4B7BEC" }}
                    />
                </View>
                <TouchableOpacity onPress={handleDelete}>
                    <Ionicons name="trash-outline" size={24} color="#FF6347" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CFD6FF",
        padding: 15,
        marginVertical: 5,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    rowCard: {
        flexDirection: "row",
        alignItems: "center",
    },
    content: {
        flex: 1,
    },
    taskText: {
        fontSize: 16,
        color: "#333",
    },
    checkboxContainer: {
        marginLeft: 10,
    },
});

export default TaskChecklist;
