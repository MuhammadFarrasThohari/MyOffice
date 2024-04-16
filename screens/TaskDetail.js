import { View, Text, StyleSheet } from "react-native";
import cardStyles from "../assets/StyleCard";
import { getTask, updateTask } from "../data/data"; // Tambahkan fungsi updateTask
import { useEffect, useState } from "react";
import TaskCheklist from "../components/TaskCheklist";

const TaskDetail = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTask();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching task data:", error);
            }
        };

        fetchData();
    }, []);

    const handleTaskCheck = async (taskId, isChecked) => {
        try {
            await updateTask(taskId, isChecked);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <View style={cardStyles.container}>
            <Text>Task</Text>
            {tasks.map((kerjaan, index) => {
                return (
                    <TaskCheklist
                        key={index}
                        judul={kerjaan.task}
                        id={kerjaan.task_id}
                        isChecked={kerjaan.is_done}
                        onTaskCheck={handleTaskCheck} // Teruskan fungsi handleTaskCheck sebagai prop
                    />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskDetail;
