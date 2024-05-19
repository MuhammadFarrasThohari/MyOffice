import { Text, StyleSheet, View, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";
import { useTask } from "../data/Context";
import { useNavigation } from "@react-navigation/native";

const TaskCard = () => {
    const { tasks, handleTaskCheck, handleDelete } = useTask();
    const limitedTasks = tasks.slice(0, 3);
    const navigation = useNavigation();
    return (
        <View style={cardStyles.container}>
            <Text style={styles.judul}>Task</Text>
            {limitedTasks.map((kerjaan, index) => (
                <TaskCheklist
                    key={index}
                    judul={kerjaan.task}
                    id={kerjaan.task_id}
                    isChecked={kerjaan.is_done}
                    onTaskCheck={handleTaskCheck}
                    onDelete={handleDelete}
                />
            ))}
            <TouchableOpacity onPress={() => navigation.navigate("TaskDetail")}>
                <Text style={styles.seeMore}>See More -{">"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    seeMore: {
        textAlign: "right",
        marginTop: 15, // Memberikan jarak dari task checklist
        textDecorationLine: "underline", // Menambahkan garis bawah pada teks
    },
    judul: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 10,
    },
});

export default TaskCard;
