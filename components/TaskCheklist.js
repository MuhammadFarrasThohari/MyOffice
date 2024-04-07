import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class TaskCheklist extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Masukkan Task disini</Text>
                <BouncyCheckbox />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CFD6FF",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 14,
    },
});
