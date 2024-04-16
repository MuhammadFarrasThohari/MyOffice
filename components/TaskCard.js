import { Text, StyleSheet, View } from "react-native";
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";
import { useEffect } from "react";
import KumpulanTask from "./KumpulanTask";

const TaskCard = () => {
    return (
        <View style={cardStyles.container}>
            <Text>Task</Text>
            <KumpulanTask />
            <Text>See More</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TaskCard;
