import { View, Text, StyleSheet, Image } from "react-native";
import Kotak from "../components/ProgressBar";
import cardStyles from "../assets/StyleCard";

const Performance = () => {
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <View style={cardStyles.container}>
                <Text>Performance</Text>
                <Text>80%</Text>
                <Kotak />
                <Text>Very Good Performance</Text>
                <View
                    style={[
                        cardStyles.second_container,
                        styles.overriddenSecondContainer,
                    ]}
                >
                    <View>
                        <Text>Attendance</Text>
                        <Text>Quality of Work</Text>
                        <Text>Reliability</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("../assets/Star_blank.png")}
                            />
                            <Image
                                source={require("../assets/Star_blank.png")}
                            />
                            <Image
                                source={require("../assets/Star_blank.png")}
                            />
                            <Image
                                source={require("../assets/Star_blank.png")}
                            />
                        </View>
                    </View>
                </View>
                <View style={[cardStyles.second_container]}>
                    <Text>Full Review</Text>
                    <Text>Dear [Employee Name]</Text>
                    <Text>Full review paragraf here</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overriddenSecondContainer: {
        flexDirection: "row",
    },
});

export default Performance;
