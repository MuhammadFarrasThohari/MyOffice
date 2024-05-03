import { View, Text, TouchableOpacity } from "react-native";
import card from "../../assets/StyleCard";

const WageCard = () => {
    return (
        <View style={card.container}>
            <Text>Employee Wages</Text>
            <View style={card.second_container}>
                <Text>60% employee has been reviewed</Text>
            </View>
            <TouchableOpacity>
                <Text>See more</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WageCard;
