import { View, Text, TouchableOpacity } from "react-native";
import card from "../../assets/StyleCard";
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from "@react-navigation/native";

const ReviewCard = () => {
    const navigation = useNavigation();
    return (
        <View style={card.container}>
            <Text>Employee Review</Text>
            <CircularProgress
                value={60}
                radius={60}
                progressValueColor={"black"}
                activeStrokeColor={"#535C91"}
                activeStrokeWidth={20}
                clockwise={false}
            />
            <Text>60% employee has been reviewed</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Review Employee")}
            >
                <Text>See more</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReviewCard;
