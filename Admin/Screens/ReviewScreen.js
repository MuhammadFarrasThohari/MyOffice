import { View, Text, ScrollView, StyleSheet } from "react-native";
import card from "../../assets/StyleCard";
import EmployeeCard from "../Components/EmployeeCard";

const ReviewScreen = () => {
    return (
        <View
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <Text>Review Employee</Text>
            <View style={[card.container, styles.reviewContainer]}>
                <Text>Employee needs reviewed</Text>
                <ScrollView style={styles.scrollView}>
                    <EmployeeCard />
                </ScrollView>
            </View>
            <View style={[card.container, styles.reviewContainer]}>
                <Text>Reviewed Employee</Text>
                <ScrollView style={styles.scrollView}>
                    <EmployeeCard />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {},
    reviewContainer: {
        flex: 1,
    },
});

export default ReviewScreen;
