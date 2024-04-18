import React from "react";
import { Text, StyleSheet, View } from "react-native";
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";
import { useTask } from "../data/Context";

const TaskCard = () => {
    const { tasks, handleTaskCheck } = useTask();
    const limitedTasks = tasks.slice(0, 3); // Mengambil 3 item pertama dari tasks
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
            {tasks.length > 3 && <Text>See More</Text>}
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskCard;
