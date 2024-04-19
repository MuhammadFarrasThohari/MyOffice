import { useState } from "react";
import { View, Text, Modal, Button, TextInput } from "react-native";

const InputModal = ({ visibility, pressHandler }) => {
    const [task, setTask] = useState("");

    const onPressClose = () => {
        pressHandler();
    };

    const onPressSave = () => {
        console.log("task saved");
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
