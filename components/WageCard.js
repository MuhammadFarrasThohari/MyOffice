import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import cardStyle from "../assets/StyleCard";

export default class WageCard extends Component {
    render(Gaji, BaseGaji, BonusGaji, OvertimeGaji) {
        return (
            <View style={cardStyle.container}>
                <Text>Wage</Text>
                <Text>Rp. {Gaji}</Text>
                <View style={styles.detailWage}>
                    <Text>Detail: {"\n"}</Text>
                    <Text>Base: Rp. {BaseGaji}</Text>
                    <Text>Bonus: Rp. {BonusGaji}</Text>
                    <Text>Overtime: Rp. {OvertimeGaji}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailWage: {
        backgroundColor: "#CFD6FF",
        padding: 10,
        borderRadius: 14,
    },
});
