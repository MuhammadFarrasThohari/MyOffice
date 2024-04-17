import { View } from "react-native";
import TaskCheklist from "./TaskCheklist";
import { useTask } from "../data/Context";

const KumpulanTask = () => {
    const { tasks, handleTaskCheck } = useTask();
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
