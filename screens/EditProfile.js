import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useProfile } from "../data/ProfileContext";

const EditProfile = () => {
    const { nama, updateNama } = useProfile();
    const [newNama, setNewNama] = useState(nama);

    const handleSave = () => {
        updateNama(newNama);
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
        </View>
    );
};

export default EditProfile;
