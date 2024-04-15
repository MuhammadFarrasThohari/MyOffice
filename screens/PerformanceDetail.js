import { View, Text, StyleSheet, Image } from "react-native";
import Kotak from "../components/ProgressBar";
import cardStyles from "../assets/StyleCard";
import Stars from "../components/Stars";

const Performance = (props) => {
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <View style={[cardStyles.container, styles.containerMargin]}>
                <Text style={styles.textMargin}>Performance</Text>
                <Text style={styles.textMargin}>80%</Text>
                <Kotak style={styles.kotakMargin} />
                <Text style={styles.textMargin}>Very Good Performance</Text>
                <View
                    style={[
                        cardStyles.second_container,
                        styles.overriddenSecondContainer,
                    ]}
                >
                    <View>
                        <Text style={styles.textMargin}>Attendance</Text>
                        <Text style={styles.textMargin}>Quality of Work</Text>
                        <Text style={styles.textMargin}>Reliability</Text>
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
                    <Text style={styles.textMargin}>Full Review</Text>
                    <Text style={styles.textMargin}>Dear [Employee Name]</Text>
                    <Text style={styles.textMargin}>{props.full_review}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overriddenSecondContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerMargin: {
        margin: 10,
    },
    textMargin: {
        marginVertical: 5,
    },
    horizontalMargin: {
        marginHorizontal: 5,
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
