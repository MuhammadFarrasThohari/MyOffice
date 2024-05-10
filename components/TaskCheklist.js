import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskCheklist = ({ judul, id, isChecked, onTaskCheck, onDelete }) => {
    const handleTaskCheck = () => {
        // Panggil fungsi onTaskCheck saat kotak tugas diperiksa
        onTaskCheck(id, !isChecked);
        console.log(id, isChecked);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <View style={styles.container}>
            <Text>{judul}</Text>
            <BouncyCheckbox
                isChecked={isChecked}
                onPress={handleTaskCheck} // Panggil handleTaskCheck saat kotak diperiksa
            />
            <TouchableOpacity onPress={handleDelete}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CFD6FF",
    },
});

export default TaskCheklist;
