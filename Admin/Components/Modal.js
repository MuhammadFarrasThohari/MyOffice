// InputModal.js
import React, { useState } from "react";
import { View, Text, Modal, Button, TextInput, Alert } from "react-native";

const InputModal = ({ visibility, pressHandler, updateReview }) => {
    const [attendance, setAttendance] = useState("");
    const [qow, setQow] = useState("");
    const [reliability, setReliability] = useState("");

    const onPressClose = () => {
        pressHandler();
    };

    const onPressSave = () => {
        const invalid =
            parseInt(attendance) > 5 ||
            parseInt(qow) > 5 ||
            parseInt(reliability) > 5;

        if (invalid) {
            Alert.alert("Invalid Input", "Please input a number between 0-5", [
                {
                    text: "OK",
                    onPress: () => {
                        setAttendance("");
                        setQow("");
                        setReliability("");
                    },
                },
            ]);
        } else {
            // Kirim nilai-nilai yang diinput ke ReviewDetail
            updateReview({
                Attendance: parseInt(attendance),
                QoW: parseInt(qow),
                Reliability: parseInt(reliability),
            });
            pressHandler();
        }
    };

    return (
        <Modal visible={visibility} animationType="slide">
            <View>
                <Text>Input Review</Text>
                <View>
                    <Text>Attendance</Text>
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                        value={attendance}
                        onChangeText={(value) => setAttendance(value)}
                    />
                    <Text>Quality Of Work</Text>
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                        value={qow}
                        onChangeText={(value) => setQow(value)}
                    />
                    <Text>Reliability</Text>
                    <TextInput
                        keyboardType="numeric"
                        maxLength={1}
                        value={reliability}
                        onChangeText={(value) => setReliability(value)}
                    />
                </View>

                <Button title="Close" onPress={onPressClose} />
                <Button title="Save" onPress={onPressSave} />
            </View>
        </Modal>
    );
};

export default InputModal;
