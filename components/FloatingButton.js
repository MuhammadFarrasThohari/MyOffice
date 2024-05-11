import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { addTask } from "../data/data";

const FloatingButton = ({ pressHandler }) => {
    function openModal() {
        pressHandler();
    }
    return (
        <TouchableOpacity onPress={openModal} style={styles.fab}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        width: 56,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        bottom: 20,
        right: 20,
        backgroundColor: "#798CFA",
        borderRadius: 15,
        elevation: 8,
    },
    text: {
        fontSize: 24,
        color: "white",
    },
});

export default FloatingButton;
