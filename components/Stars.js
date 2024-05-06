import { View, Image, StyleSheet } from "react-native";

const Stars = (props) => {
    return (
        <View style={styles.starsContainer}>
            {[...Array(props.nilai)].map((_, index) => (
                <Image
                    key={index}
                    source={require("../assets/Star_filled.png")}
                    style={styles.starImage}
                />
            ))}
            {[...Array(5 - props.nilai)].map((_, index) => (
                <Image
                    key={index}
                    source={require("../assets/Star_blank.png")}
                    style={styles.starImage}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    starImage: {
        marginHorizontal: 5,
        marginVertical: 5,
    },
});

export default Stars;
