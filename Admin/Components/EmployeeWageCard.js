import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import WageModal from "./WageModal";
import { useEmployeeWage } from "../../data/GajiContext";

const EmployeeWageCard = ({ metadata }) => {
    const { nama_users, jabatan_users, foto_users } = metadata;

    const [modalVisible, setModalVisible] = useState(false);

    const { updateWage } = useEmployeeWage();

    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    const onSave = (data) => {
        updateWage(metadata.user_id, data);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={openModal}>
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
            <WageModal
                visible={modalVisible}
                close={closeModal}
                onSave={onSave}
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

export default EmployeeWageCard;
