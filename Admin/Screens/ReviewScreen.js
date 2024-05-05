import { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import card from "../../assets/StyleCard";
import EmployeeCard from "../Components/EmployeeCard";
import { supabase } from "../../lib/supabase";

const ReviewScreen = () => {
    const [reviewedEmployee, setReviewedEmployee] = useState([]);
    const [notReviewedEmployee, setNotReviewedEmployee] = useState([]);

    useEffect(() => {
        const testQuery = async () => {
            try {
                const { data, error } = await supabase
                    .from("profile_users")
                    .select(
                        `nama_users, jabatan_users, foto_users, performance_users(nilai, short_review, full_review)`
                    )
                    .eq("isAdmin", false);
                console.log(data);

                if (error) {
                    console.error(
                        "Error fetching employee data:",
                        error.message
                    );
                    return;
                }

                // Filter karyawan yang belum direview
                const notReviewed = data.filter(
                    (employee) => !employee.performance_users
                );

                // Filter karyawan yang sudah direview
                const reviewed = data.filter(
                    (employee) => employee.performance_users
                );

                setNotReviewedEmployee(notReviewed);
                setReviewedEmployee(reviewed);

                console.log("Not Reviewed:", notReviewed);
                console.log("Reviewed:", reviewed);
            } catch (error) {
                console.error("Error fetching employee data:", error.message);
            }
        };

        testQuery();
    }, []);

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
