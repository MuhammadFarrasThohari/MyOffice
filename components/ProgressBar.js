import { View, StyleSheet } from "react-native";

const Kotak = ({ progress }) => {
    return (
        <View style={styles.box}>
            <View style={[styles.boxDalam, { width: `${progress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginVertical: 10,
        width: "100%",
        height: 15,
        backgroundColor: "#D9D9D9",
        borderRadius: 12,
    },
    boxDalam: {
        height: "100%",
        backgroundColor: "#535C91",
        borderRadius: 14,
    },
});

export default Kotak;
