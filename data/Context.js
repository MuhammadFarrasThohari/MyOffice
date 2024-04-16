import { createContext, useState } from "react";
import { getTask } from "./data";

const [tasks, setTasks] = useState([taskState]);

const taskState = getTask();

const TaskContext = createContext(tasks);

export { TaskContext };
