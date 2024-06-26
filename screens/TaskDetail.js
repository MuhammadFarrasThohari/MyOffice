import { View, Text, StyleSheet, ScrollView } from "react-native";
import cardStyles from "../assets/StyleCard";
import { useTask } from "../data/Context";
import TaskCheklist from "../components/TaskCheklist";
import FloatingButton from "../components/FloatingButton";
import InputModal from "../components/Modal";
import { useState } from "react";
const TaskDetail = () => {
    const { tasks, handleTaskCheck, handleDelete } = useTask();
    const [modalVisible, setModalVisible] = useState(false);

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    return (
        <View
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <ScrollView style={cardStyles.container}>
                <Text style={styles.judul}>Task</Text>
                {tasks.map((kerjaan, index) => (
                    <TaskCheklist
                        key={index}
                        judul={kerjaan.task}
                        id={kerjaan.task_id}
                        isChecked={kerjaan.is_done}
                        onTaskCheck={handleTaskCheck}
                        onDelete={handleDelete}
                    />
                ))}
            </ScrollView>
            <FloatingButton pressHandler={openModal} />
            <InputModal visibility={modalVisible} pressHandler={closeModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    judul: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 10,
    },
});

export default TaskDetail;
