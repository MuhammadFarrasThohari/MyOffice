import React, { useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";

const Stars = () => {
    const [starCount, setStarCount] = useState(0);

    const increaseStarCount = () => {
        if (starCount < 5) {
            setStarCount(starCount + 1);
        }
    };

    const decreaseStarCount = () => {
        if (starCount > 0) {
            setStarCount(starCount - 1);
        }
    };

    return (
        <View style={styles.starsContainer}>
            {[...Array(starCount)].map((_, index) => (
                <Image
                    key={index}
                    source={require("../assets/Star_filled.png")}
                    style={styles.starImage}
                />
            ))}
            {[...Array(5 - starCount)].map((_, index) => (
                <Image
                    key={index + starCount}
                    source={require("../assets/Star_blank.png")}
                    style={styles.starImage}
                />
            ))}
            <View style={styles.buttonContainer}>
                <Button title="Tambah Bintang" onPress={increaseStarCount} />
                <Button title="Kurangi Bintang" onPress={decreaseStarCount} />
            </View>
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
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    },
});

export default Stars;
