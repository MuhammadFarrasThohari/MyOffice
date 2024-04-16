import { View, Text } from "react-native";
import TaskCheklist from "./TaskCheklist";
import { useEffect, useState } from "react";
import { getTask, updateTask } from "../data/data";

const KumpulanTask = () => {
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
        <View>
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

export default KumpulanTask;
