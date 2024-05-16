import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import card from "../../assets/StyleCard";
import Stars from "../../components/Stars";
import InputModal from "../Components/Modal";
import { useEmployee } from "../../data/EmployeeContext";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons dari expo vector icons

const ReviewDetail = ({ route }) => {
    const { updateReview } = useEmployee();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { nama, jabatan, foto_users } = route.params.profile;
    const {
        nilai = {},
        full_review: initialFullReview = "",
        short_review: initialShortReview = "",
    } = route.params.reviewValue || {};
    const [attendance, setAttendance] = useState(nilai.Attendance || 0);
    const [qow, setQow] = useState(nilai.QoW || 0);
    const [reliability, setReliability] = useState(nilai.Reliability || 0);
    const [fullReview, setFullReview] = useState(initialFullReview);
    const [shortReview, setShortReview] = useState(initialShortReview);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const updateReviewState = (values) => {
        setAttendance(values.Attendance || 0);
        setQow(values.QoW || 0);
        setReliability(values.Reliability || 0);
    };

    const SaveReview = () => {
        updateReview(
            fullReview,
            shortReview,
            attendance,
            qow,
            reliability,
            route.params.profile.id,
            nama,
            jabatan,
            foto_users
        );
        navigation.goBack();
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="chevron-back-outline"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Employee Review Details</Text>
                    <View />
                </View>

                <Text style={styles.subtitle}>Employee Profile</Text>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: foto_users }} style={styles.gambar} />
                    <View>
                        <Text>{nama}</Text>
                        <Text>{jabatan}</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Employee Performance</Text>
                <View style={[styles.performanceContainer]}>
                    <View style={styles.overriddenSecondContainer}>
                        <View>
                            <Text style={styles.textMargin}>Attendance</Text>
                            <Text style={styles.textMargin}>
                                Quality of Work
                            </Text>
                            <Text style={styles.textMargin}>Reliability</Text>
                        </View>
                        <View style={styles.horizontalMargin}>
                            <Stars nilai={attendance} />
                            <Stars nilai={qow} />
                            <Stars nilai={reliability} />
                        </View>
                    </View>
                    <Button title="Add Review" onPress={openModal} />
                </View>
                <Text style={styles.subtitle}>Employee Short Review</Text>
                <View style={styles.reviewContainer}>
                    <TextInput
                        placeholder="Short Review"
                        value={shortReview}
                        onChangeText={setShortReview}
                    />
                </View>
                <Text style={styles.subtitle}>Employee Full Review</Text>
                <View style={styles.reviewContainer}>
                    <TextInput
                        placeholder="Full Review"
                        value={fullReview}
                        onChangeText={setFullReview}
                    />
                </View>
                <Button title="Save" onPress={SaveReview} />
            </View>
            <InputModal
                visibility={modalVisible}
                pressHandler={closeModal}
                updateReview={updateReviewState}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#070F2B",
        flex: 1,
    },
    cardContainer: {
        ...card.container,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        marginBottom: 5,
    },
    profileContainer: {
        ...card.second_container,
        flexDirection: "row",
    },
    performanceContainer: {
        ...card.second_container,
    },
    overriddenSecondContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textMargin: {
        marginVertical: 5,
    },
    horizontalMargin: {
        marginHorizontal: 10,
    },
    reviewContainer: {
        ...card.second_container,
    },
    backButton: {
        alignSelf: "flex-end",
        marginVertical: 10,
    },
    backButtonText: {
        color: "black",
    },
    gambar: {
        height: 70,
        width: 70,
        marginRight: 15,
        borderRadius: 15,
    },
    header: {
        flexDirection: "row",
        marginBottom: 15,
        alignItems: "center",
    },
    backButton: {
        marginRight: 10,
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
    },
});

export default ReviewDetail;
