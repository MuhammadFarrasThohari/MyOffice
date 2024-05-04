import { View, Text, Image } from "react-native";
import card from "../../assets/StyleCard";
import { TextInput } from "react-native-gesture-handler";
const ReviewDetail = () => {
    return (
        <View
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <View style={card.container}>
                <Text>Employee Review Details</Text>
                <View style={card.second_container}>
                    <Image source={require("../../assets/snack-icon.png")} />
                    <Text>John Doe</Text>
                    <Text>Chief Executive Officer</Text>
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
            </View>
        </View>
    );
};

export default ReviewDetail;
