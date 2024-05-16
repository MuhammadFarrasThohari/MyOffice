import { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { useProfile } from "../data/ProfileContext";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import card from "../assets/StyleCard";
import { supabase } from "../lib/supabase";

const EditProfile = () => {
    const { nama, updateNama, updateFoto, foto } = useProfile();
    const [newNama, setNewNama] = useState(nama);
    const [newFoto, setNewFoto] = useState(foto);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (newNama !== nama || newFoto !== foto) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [newNama, newFoto, nama, foto]);

    const handleSave = () => {
        if (newNama !== nama) {
            updateNama(newNama);
        }
        if (newFoto !== foto) {
            updateFoto(newFoto);
        }
        Alert.alert(
            "Profile Updated",
            "Your profile has been updated successfully."
        );
        setIsChanged(false);
    };

    const handleGantiFoto = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.canceled) {
                const img = result.assets[0];
                const base64 = await FileSystem.readAsStringAsync(img.uri, {
                    encoding: "base64",
                });
                setNewFoto(base64);
                Alert.alert(
                    "Photo Updated",
                    "Your profile photo has been updated successfully."
                );
            }
        } catch (error) {
            Alert.alert("Error", "Unable to change photo: " + error.message);
        }
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert("Error", "Unable to sign out: " + error.message);
        }
    };

    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <View style={[card.container, { flex: 1 }]}>
                <Text style={styles.title}>Edit Profile</Text>
                <TouchableOpacity
                    onPress={handleGantiFoto}
                    style={styles.imageContainer}
                >
                    <Image source={foto} style={styles.image} />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Nama"
                    value={newNama}
                    onChangeText={setNewNama}
                />
                <View style={{ flex: 1 }} />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Save"
                        onPress={handleSave}
                        color="#1E90FF"
                        disabled={!isChanged}
                        style={styles.buttonMargin}
                    />
                    <View style={styles.buttonSpacing} />
                    <Button
                        title="Sign Out"
                        onPress={signOut}
                        color="#FF6347"
                        style={styles.buttonMargin}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: "#1E90FF",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center",
    },
    buttonContainer: {
        marginBottom: 20,
    },
    buttonMargin: {
        marginVertical: 10,
    },
    buttonSpacing: {
        height: 10, // Adjust the space between the buttons
    },
});

export default EditProfile;
