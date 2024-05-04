import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EmployeeCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/snack-icon.png")}
                style={styles.gambar}
            />
            <View style={styles.content}>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.position}>Chief Executive Officer</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Review Detail")}
            >
                <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#CFD6FF",
        padding: 10,
        borderRadius: 16,
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    position: {
        fontSize: 16,
        color: "gray",
    },
    button: {
        marginLeft: 10,
    },
    gambar: {
        height: 50,
        width: 50,
        marginHorizontal: 15,
    },
});

export default EmployeeCard;
