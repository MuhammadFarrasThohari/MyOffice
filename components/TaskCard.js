import { Text, StyleSheet, View } from "react-native";
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";

const TaskCard = () => {
    return (
        <View style={cardStyles.container}>
            <Text>Task</Text>
            <TaskCheklist />
            <Text>See More</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskCard;
