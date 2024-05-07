import React, { useState } from "react";
import {
    View,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const WageModal = ({ visible, close, onSave }) => {
    const [basicWage, setBasicWage] = useState("");
    const [overtimeWage, setOvertimeWage] = useState("");
    const [bonusWage, setBonusWage] = useState("");

    const formatToRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const handleSave = () => {
        onSave({
            gaji_pokok: parseInt(basicWage.replace(/\D/g, "")),
            gaji_lembur: parseInt(overtimeWage.replace(/\D/g, "")),
            gaji_bonus: parseInt(bonusWage.replace(/\D/g, "")),
        });
        close();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <Text style={styles.title}>Atur Gaji Karyawan</Text>
                <Text style={styles.label}>Gaji Pokok</Text>
                <TextInput
                    style={styles.input}
                    value={formatToRupiah(basicWage)}
                    onChangeText={(text) =>
                        setBasicWage(text.replace(/\D/g, ""))
                    }
                    keyboardType="numeric"
                    placeholder="Masukkan gaji pokok"
                />
                <Text style={styles.label}>Gaji Lembur</Text>
                <TextInput
                    style={styles.input}
                    value={formatToRupiah(overtimeWage)}
                    onChangeText={(text) =>
                        setOvertimeWage(text.replace(/\D/g, ""))
                    }
                    keyboardType="numeric"
                    placeholder="Masukkan gaji lembur"
                />
                <Text style={styles.label}>Gaji Bonus</Text>
                <TextInput
                    style={styles.input}
                    value={formatToRupiah(bonusWage)}
                    onChangeText={(text) =>
                        setBonusWage(text.replace(/\D/g, ""))
                    }
                    keyboardType="numeric"
                    placeholder="Masukkan gaji bonus"
                />
                <TouchableOpacity onPress={handleSave}>
                    <Text style={styles.saveButton}>Simpan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={close}>
                    <Text style={styles.closeButton}>Close Modal</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%",
    },
    saveButton: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
    },
    closeButton: {
        marginTop: 10,
        fontSize: 18,
        color: "blue",
    },
});

export default WageModal;
