import { useState } from "react";
import { View, Text, Modal, Button, TextInput } from "react-native";
import { addTask } from "../data/data";
import { useTask } from "../data/Context";

const InputModal = ({ visibility, pressHandler }) => {
    const [task, setTask] = useState("");
    const { handleTaskCheck } = useTask();

    const onPressClose = () => {
        pressHandler();
    };

    const onPressSave = async () => {
        const task_baru = await addTask(task);
        handleTaskCheck(
            task_baru[0].task_id,
            task_baru[0].is_done,
            (newTask = task_baru[0])
        );
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View>
                <Text>Input Task</Text>
                <TextInput
                    placeholder="Masukkan Task Disini"
                    value={task}
                    onChangeText={(value) => setTask(value)}
                />
                <Button title="Close" onPress={onPressClose} />
                <Button title="Save" onPress={onPressSave} />
            </View>
        </Modal>
    );
};

export default InputModal;
