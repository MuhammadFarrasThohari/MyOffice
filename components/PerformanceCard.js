import { View, Text, StyleSheet } from "react-native";
import cardStyles from "../assets/StyleCard";
import ProgressBar from "./ProgressBar";

const PerformanceCard = () => {
    return (
        <View style={cardStyles.container}>
            <View style={styles.columnStyles}>
                <Text> Performance </Text>
                <View style={styles.garisItem} />
                <Text> 80% </Text>
                <ProgressBar />
                <Text> Short review </Text>
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
