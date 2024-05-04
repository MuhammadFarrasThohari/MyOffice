import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewScreen from "./ReviewScreen";
import ReviewDetail from "./ReviewDetail";

const Stack = createNativeStackNavigator();

const MyStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Review"
                component={ReviewScreen}
                options={{ headerShown: false }} // Sembunyikan header di ReviewScreen
            />
            <Stack.Screen
                name="Review Detail"
                component={ReviewDetail}
                options={{ headerShown: false }} // Sembunyikan header di ReviewDetail
            />
        </Stack.Navigator>
    );
};

const ReviewNav = () => {
    return (
        <NavigationContainer independent={true}>
            <MyStacks />
        </NavigationContainer>
    );
};

export default ReviewNav;
