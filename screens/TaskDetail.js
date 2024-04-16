import { View, Text, StyleSheet } from "react-native";
import cardStyles from "../assets/StyleCard";
import KumpulanTask from "../components/KumpulanTask";

const TaskDetail = () => {
    return (
        <View style={cardStyles.container}>
            <Text>Task</Text>
            <KumpulanTask />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskDetail;
