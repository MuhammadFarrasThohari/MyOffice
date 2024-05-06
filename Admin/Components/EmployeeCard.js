// EmployeeCard.js
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EmployeeCard = ({ metadata }) => {
    // , {profile: {nama: nama_users, jabatan: jabatan_users}, reviewValue:{bintang:} }
    const navigation = useNavigation();
    const {
        user_id,
        nama_users,
        jabatan_users,
        foto_users,
        performance_users,
    } = metadata; // Destructure properti dari employee

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate("Review Detail", {
                    profile: {
                        id: user_id,
                        nama: nama_users,
                        jabatan: jabatan_users,
                    },
                    reviewValue: performance_users,
                })
            }
        >
            <Image source={{ uri: foto_users }} style={styles.gambar} />
            <View style={styles.content}>
                <Text style={styles.name}>{nama_users}</Text>
                <Text style={styles.position}>{jabatan_users}</Text>
            </View>
            <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
                style={styles.icon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#CFD6FF",
        padding: 10,
        borderRadius: 16,
        marginBottom: 10, // Tambahkan margin bawah agar card terpisah
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
    icon: {
        marginLeft: 10,
    },
    gambar: {
        height: 50,
        width: 50,
        marginHorizontal: 15,
    },
});

export default EmployeeCard;
