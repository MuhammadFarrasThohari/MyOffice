import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import cardStyles from "../assets/StyleCard";
import TaskCheklist from "./TaskCheklist";

export default class TaskCard extends Component {
    render() {
        return (
            <View style={cardStyles.container}>
                <Text>Task</Text>
                <TaskCheklist />
                <Text>See More</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
