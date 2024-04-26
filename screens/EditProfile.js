import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useProfile } from "../data/ProfileContext";
import * as ImagePicker from "expo-image-picker";
import { changePhoto } from "../data/data";
import * as FileSystem from "expo-file-system";

const EditProfile = () => {
    const { nama, updateNama } = useProfile();
    const [newNama, setNewNama] = useState(nama);

    const handleSave = () => {
        updateNama(newNama);
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
                await changePhoto(base64);
            }
        } catch (error) {
            Alert.alert("foto tidak dapat diganti: ", error);
        }
    };

    return (
        <View>
            <Text>Edit Profile</Text>
            <TextInput
                placeholder="Nama"
                value={newNama}
                onChangeText={setNewNama}
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Ganti foto" onPress={handleGantiFoto} />
        </View>
    );
};

export default EditProfile;
