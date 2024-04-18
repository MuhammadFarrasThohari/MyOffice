import { View, Text, StyleSheet, ScrollView } from "react-native";
import cardStyles from "../assets/StyleCard";
import { useTask } from "../data/Context";
import TaskCheklist from "../components/TaskCheklist";
const TaskDetail = () => {
    const { tasks, handleTaskCheck } = useTask();
    return (
        <ScrollView style={cardStyles.container}>
            <Text>Task</Text>
            {tasks.map((kerjaan, index) => (
                <TaskCheklist
                    key={index}
                    judul={kerjaan.task}
                    id={kerjaan.task_id}
                    isChecked={kerjaan.is_done}
                    onTaskCheck={handleTaskCheck}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default TaskDetail;
