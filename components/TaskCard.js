import { Text, StyleSheet, View } from "react-native";
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";
import { useTask } from "../data/Context";

const TaskCard = () => {
    const { tasks, handleTaskCheck } = useTask();
    return (
        <View style={cardStyles.container}>
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
            <Text>See More</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskCard;
