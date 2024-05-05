import { View, Text, Image, TouchableOpacity } from "react-native";
import card from "../../assets/StyleCard";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ReviewDetail = ({ route }) => {
    const navigation = useNavigation();
    const { nama, jabatan } = route.params.profile;
    console.log(nama, jabatan);
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <View style={card.container}>
                <Text>Employee Review Details</Text>
                <View style={card.second_container}>
                    <Image source={require("../../assets/snack-icon.png")} />
                    <Text>{nama}</Text>
                    <Text>{jabatan}</Text>
                </View>
                <View style={card.second_container}>
                    <Text>Attendance</Text>
                    <Text>Quality of Work</Text>
                    <Text>Reliability</Text>
                </View>
                <View style={card.second_container}>
                    <TextInput placeholder="Short Review" />
                </View>
                <View style={card.second_container}>
                    <TextInput placeholder="Full Review" />
                </View>
                <TouchableOpacity
                    style={{ alignSelf: "flex-end", marginVertical: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ color: "black" }}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ReviewDetail;
