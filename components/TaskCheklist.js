import { Text, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskCheklist = ({ judul, id, isChecked, onTaskCheck }) => {
    const handleTaskCheck = () => {
        // Panggil fungsi onTaskCheck saat kotak tugas diperiksa
        onTaskCheck(id, !isChecked);
        console.log(id, isChecked);
    };

    return (
        <View style={styles.container}>
            <Text>{judul}</Text>
            <BouncyCheckbox
                isChecked={isChecked}
                onPress={handleTaskCheck} // Panggil handleTaskCheck saat kotak diperiksa
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CFD6FF",
    },
});

export default TaskCheklist;
