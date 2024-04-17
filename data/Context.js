import React, { createContext, useContext, useState, useEffect } from "react";
import { getTask, updateTask } from "../data/data";

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

    const handleTaskCheck = async (taskId, isChecked) => {
        try {
            // Update task on the server
            await updateTask(taskId, isChecked);

            // Update tasks state locally
            const updatedTasks = tasks.map((task) => {
                if (task.task_id === taskId) {
                    return { ...task, is_done: isChecked };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, handleTaskCheck }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTask = () => useContext(TaskContext);
