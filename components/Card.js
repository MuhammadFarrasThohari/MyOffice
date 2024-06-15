import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import card from "../assets/StyleCard";
import { Ionicons } from "@expo/vector-icons";
import { useProfile } from "../data/ProfileContext";
import { useNavigation } from "@react-navigation/native";

const Card = () => {
    const { nama, jabatan, foto } = useProfile();
    const navigation = useNavigation();

    const navigateToEditProfile = () => {
        navigation.navigate("Edit Profile");
    };

    return (
        <View style={card.container}>
            <View style={styles.rowCard}>
                <View style={styles.leftContent}>
                    <Image source={foto} style={styles.gambar} />
                </View>
                <View style={styles.centerContent}>
                    <Text style={styles.nama}>{nama}</Text>
                    <Text style={styles.jabatan}>{jabatan}</Text>
                </View>
                <TouchableOpacity
                    onPress={navigateToEditProfile}
                    style={styles.editButton}
                >
                    <Ionicons
                        name="chevron-forward-outline"
                        size={24}
                        color="#384174"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gambar: {
        width: 54,
        height: 54,
        borderRadius: 12, // Membuat gambar menjadi lingkaran
    },
    rowCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    nama: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: 150, // Sesuaikan dengan kebutuhan Anda
    },
    jabatan: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        maxWidth: 150, // Sesuaikan dengan kebutuhan Anda
    },
    editButton: {},
    leftContent: {},
    centerContent: {
        marginHorizontal: 10,
    },
});

export default Card;
