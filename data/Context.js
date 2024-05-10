import { createContext, useContext, useState, useEffect } from "react";
import { getTask, updateTask } from "../data/data";
import { supabase } from "../lib/supabase";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
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

    const handleTaskCheck = async (taskId, isChecked, newTask = null) => {
        try {
            if (newTask == null) {
                // Update task on the server
                await updateTask(taskId, isChecked);
            }

            // Update tasks state locally
            let updatedTasks;
            if (newTask) {
                // Jika menambahkan tugas baru, tambahkan tugas tersebut ke daftar tugas yang ada
                updatedTasks = [...tasks, newTask];
            } else {
                // Jika tidak menambahkan tugas baru, perbarui status tugas yang ada
                updatedTasks = tasks.map((task) => {
                    if (task.task_id === taskId) {
                        return { ...task, is_done: isChecked };
                    }
                    return task;
                });
            }
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            // Hapus tugas di server
            const { error } = await supabase
                .from("task_users")
                .delete()
                .eq("task_id", taskId);

            if (error) {
                throw new Error(error.message);
            } else {
                const updatedTasks = tasks.filter(
                    (task) => task.task_id !== taskId
                );
                setTasks(updatedTasks);
            }

            // Hapus tugas dari state lokal
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, handleTaskCheck, handleDelete }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => useContext(TaskContext);
