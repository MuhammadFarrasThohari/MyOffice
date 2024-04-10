import { Text, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TaskCheklist = () => {
    return (
        <View style={styles.container}>
            <Text>Masukkan Task disini</Text>
            <BouncyCheckbox />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CFD6FF",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 14,
    },
});

export default TaskCheklist;
