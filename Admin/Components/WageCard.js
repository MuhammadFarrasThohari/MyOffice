import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import card from "../../assets/StyleCard";

const WageCard = () => {
    const calculateDaysUntilPaycheck = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        let nextPayday = new Date(currentYear, currentMonth, 15);

        if (today > nextPayday) {
            nextPayday = new Date(currentYear, currentMonth + 1, 15);
        }

        const oneDay = 24 * 60 * 60 * 1000; // ini adalah satuan detik
        const daysUntilPaycheck = Math.round((nextPayday - today) / oneDay); // dibagi 1 hari dengan satuan detik supaya mendapatkan satuan hari

        return daysUntilPaycheck;
    };

    const daysUntilPaycheck = calculateDaysUntilPaycheck();

    return (
        <View style={card.container}>
            <Text style={styles.title}>Employee Wages</Text>
            <View style={card.second_container}>
                <Text style={styles.daysText}>
                    {daysUntilPaycheck} days until paycheck
                </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>See more -{">"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
        color: "black",
    },
    daysText: {
        fontSize: 18,
        textAlign: "center",
        color: "black",
    },
    button: {
        marginTop: 10,
    },
    buttonText: {
        textAlign: "right",
        fontWeight: "bold",
    },
});

export default WageCard;
