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
                <Text style={styles.judul}> Performance </Text>
                <View style={styles.garisItem} />
                <Text style={styles.nilai}>{nilaiOverall} %</Text>
                {/* Menyesuaikan prop progress dengan nilaiOverall */}
                <ProgressBar progress={nilaiOverall} />
                <View style={cardStyles.second_container}>
                    <Text> {props.short_review} </Text>
                </View>
                <TouchableOpacity onPress={navigateToPerformance}>
                    <Text style={styles.seeMore}>See More -{">"}</Text>
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
    judul: {
        fontSize: 24,
        textAlign: "center",
    },
    nilai: {
        fontSize: 20,
        textAlign: "center",
    },
    seeMore: {
        textAlign: "right",
        marginTop: 15, // Memberikan jarak dari task checklist
        textDecorationLine: "underline", // Menambahkan garis bawah pada teks
    },
});

export default PerformanceCard;
