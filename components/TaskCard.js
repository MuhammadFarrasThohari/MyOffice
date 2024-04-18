import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";
import { useTask } from "../data/Context";
import { useNavigation } from "@react-navigation/native";

const TaskCard = () => {
    const { tasks, handleTaskCheck } = useTask();
    const limitedTasks = tasks.slice(0, 3);
    const navigation = useNavigation();
    return (
        <View style={cardStyles.container}>
            <Text>Task</Text>
            {limitedTasks.map((kerjaan, index) => (
                <TaskCheklist
                    key={index}
                    judul={kerjaan.task}
                    id={kerjaan.task_id}
                    isChecked={kerjaan.is_done}
                    onTaskCheck={handleTaskCheck}
                />
            ))}
            <TouchableOpacity onPress={() => navigation.navigate("TaskDetail")}>
                <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    seeMore: {
        marginTop: 10, // Memberikan jarak dari task checklist
        textDecorationLine: "underline", // Menambahkan garis bawah pada teks
    },
});

export default TaskCard;
