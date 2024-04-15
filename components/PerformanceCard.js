import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import cardStyles from "../assets/StyleCard";
import ProgressBar from "./ProgressBar";
import { useNavigation } from "@react-navigation/native";

const PerformanceCard = (props) => {
    const navigation = useNavigation();

    const navigateToPerformance = () => {
        navigation.navigate("Performance");
    };

    function nilaiOvr(nilai1, nilai2, nilai3) {
        return Math.round(((nilai1 + nilai2 + nilai3) / 15) * 100);
    }

    // Menghitung nilai overall hanya satu kali
    const nilaiOverall = nilaiOvr(props.nilai1, props.nilai2, props.nilai3);

    return (
        <View style={cardStyles.container}>
            <View style={styles.columnStyles}>
                <Text> Performance </Text>
                <View style={styles.garisItem} />
                <Text>{nilaiOverall} %</Text>
                {/* Menyesuaikan prop progress dengan nilaiOverall */}
                <ProgressBar progress={nilaiOverall} />
                <Text> {props.short_review} </Text>
                <TouchableOpacity onPress={navigateToPerformance}>
                    <Text>See More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    garisItem: {
        backgroundColor: "black",
        width: "100%",
        height: 1,
        marginVertical: 10,
    },
    columnStyles: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
});

export default PerformanceCard;
