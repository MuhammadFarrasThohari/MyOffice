import { View, Text, Image, StyleSheet } from "react-native";
import card from "../assets/StyleCard";

const Card = () => {
    return (
        <View style={card.container}>
            <View style={styles.rowCard}>
                <Image
                    source={require("../assets/snack-icon.png")}
                    style={styles.gambar}
                />
                <View>
                    <Text> John Doe </Text>
                    <Text> Chief Executive Officer </Text>
                </View>
                <Image
                    source={require("../assets/snack-icon.png")}
                    style={styles.gambar}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gambar: {
        width: 54,
        height: 54,
    },
    rowCard: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default Card;
