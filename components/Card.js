import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import card from "../assets/StyleCard";

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
                <Image source={foto} style={styles.gambar} />
                <View>
                    <Text>{nama}</Text>
                    <Text>{jabatan}</Text>
                </View>
                <Image source={foto} style={styles.gambar} />
                <TouchableOpacity onPress={navigateToEditProfile}>
                    <Text>edit profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gambar: {
        width: 54,
        height: 54,
    },
    rowCard: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default Card;
