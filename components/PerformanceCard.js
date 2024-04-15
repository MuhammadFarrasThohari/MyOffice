import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import cardStyles from "../assets/StyleCard";
import ProgressBar from "./ProgressBar";
import { useNavigation } from "@react-navigation/native";

const PerformanceCard = (props) => {
    const navigation = useNavigation();

    const navigateToPerformance = () => {
        navigation.navigate("Performance");
    };

    return (
        <View style={cardStyles.container}>
            <View style={styles.columnStyles}>
                <Text> Performance </Text>
                <View style={styles.garisItem} />
                <Text> 80% </Text>
                <ProgressBar />
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
