import { View, Text, StyleSheet, ScrollView } from "react-native";
import Kotak from "../components/ProgressBar";
import cardStyles from "../assets/StyleCard";
import Stars from "../components/Stars";

const Performance = (props) => {
    function nilaiOvr(nilai1, nilai2, nilai3) {
        return Math.round(((nilai1 + nilai2 + nilai3) / 15) * 100);
    }

    // Menghitung nilai kinerja secara keseluruhan
    const overallPerformance = nilaiOvr(
        props.nilaiAttendance,
        props.nilaiQoL,
        props.nilaiReliability
    );

    // Menentukan kategori berdasarkan nilai kinerja
    let performanceCategory;
    if (overallPerformance >= 90) {
        performanceCategory = "Excellent";
    } else if (overallPerformance >= 80) {
        performanceCategory = "Very Good";
    } else if (overallPerformance >= 70) {
        performanceCategory = "Good";
    } else {
        performanceCategory = "Needs Improvement";
    }

    return (
        <ScrollView
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <View style={[cardStyles.container, styles.containerMargin]}>
                <Text style={styles.judul}>Performance</Text>
                <Text style={styles.nilaiJudul}>{overallPerformance}%</Text>
                <Kotak
                    style={styles.kotakMargin}
                    progress={overallPerformance}
                />
                {/* Menampilkan kategori kinerja */}
                <Text style={styles.category}>
                    {performanceCategory} Performance
                </Text>
                <View
                    style={[
                        cardStyles.second_container,
                        styles.overriddenSecondContainer,
                    ]}
                >
                    <View>
                        <Text style={styles.keterangan}>Attendance</Text>
                        <Text style={styles.keterangan}>Quality of Work</Text>
                        <Text style={styles.keterangan}>Reliability</Text>
                    </View>
                    <View style={styles.horizontalMargin}>
                        <Stars nilai={props.nilaiAttendance} />
                        <Stars nilai={props.nilaiQoL} />
                        <Stars nilai={props.nilaiReliability} />
                    </View>
                </View>
                <View
                    style={[
                        cardStyles.second_container,
                        styles.fullReviewContainer,
                    ]}
                >
                    <Text>Full Review</Text>
                    <Text></Text>
                    <Text>{props.full_review}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    overriddenSecondContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    containerMargin: {
        margin: 10,
    },
    judul: {
        fontSize: 24,
        textAlign: "center",
    },
    nilaiJudul: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
    },
    category: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 10,
    },
    keterangan: {
        fontSize: 14,
        marginVertical: 5,
    },
    horizontalMargin: {
        marginHorizontal: 15,
    },
    kotakMargin: {
        marginTop: 10,
        marginBottom: 5,
    },
    fullReviewContainer: {
        marginBottom: 10,
    },
});

export default Performance;
