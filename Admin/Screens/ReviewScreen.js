import { View, Text, ScrollView, StyleSheet } from "react-native";
import card from "../../assets/StyleCard";
import EmployeeCard from "../Components/EmployeeCard";
import { useEmployee } from "../../data/EmployeeContext";

const ReviewScreen = () => {
    const { reviewedEmployee, notReviewedEmployee } = useEmployee();
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <Text>Review Employee</Text>
            <View style={[card.container, styles.reviewContainer]}>
                <Text>Employee needs reviewed</Text>
                <ScrollView style={styles.scrollView}>
                    {notReviewedEmployee.map((employee, index) => (
                        <EmployeeCard key={index} metadata={employee} />
                    ))}
                </ScrollView>
            </View>
            <View style={[card.container, styles.reviewContainer]}>
                <Text>Reviewed Employee</Text>
                <ScrollView style={styles.scrollView}>
                    {reviewedEmployee.map((employee, index) => (
                        <EmployeeCard key={index} metadata={employee} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    reviewContainer: {
        flex: 1,
    },
});

export default ReviewScreen;
