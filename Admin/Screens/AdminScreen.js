import { Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { supabase } from "../../lib/supabase";
import ReviewCard from "../Components/ReviewCard";
import WageCard from "../Components/WageCard";
import { useState } from "react";
import RegisterModal from "../Components/RegisterModal";
import Card from "../Components/AdminProfileCard";

const AdminScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <Text style={styles.title}>Admin Screen</Text>
            <Card />
            <ReviewCard />
            <WageCard />
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Register Employee</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={async () => await supabase.auth.signOut()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <RegisterModal
                visible={modalVisible}
                close={() => setModalVisible(false)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#798CFA",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "#fff",
    },
});

export default AdminScreen;
