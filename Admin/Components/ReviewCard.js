import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import card from "../../assets/StyleCard";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";
import { useEmployee } from "../../data/EmployeeContext";

const ReviewCard = () => {
    const { reviewedEmployee, notReviewedEmployee } = useEmployee();
    const navigation = useNavigation();

    const persentase = Math.round(
        (reviewedEmployee.length /
            (reviewedEmployee.length + notReviewedEmployee.length)) *
            100
    );

    return (
        <View style={[card.container, styles.card]}>
            <Text style={styles.title}>Employee Review</Text>
            <View style={styles.circularProgressContainer}>
                <CircularProgress
                    value={persentase}
                    radius={60}
                    progressValueColor={"black"}
                    activeStrokeColor={"#535C91"}
                    activeStrokeWidth={20}
                    clockwise={false}
                />
            </View>
            <Text style={styles.percentageText}>
                {persentase}% of employees have been reviewed
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Review Employee")}
            >
                <Text style={styles.buttonText}>See more -{">"}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
        color: "black",
    },
    circularProgressContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15, // Adjust this value as needed for spacing
    },
    percentageText: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 15,
        color: "black",
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "right",
    },
});

export default ReviewCard;
