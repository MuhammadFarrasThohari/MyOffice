import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Login = () => {
    return (
        <View style={style.container}>
            <Text style={style.judulText}> MyOffice </Text>
            <View style={style.loginCard}>
                <Text style={style.loginText}>Login</Text>
                <TextInput
                    style={style.placeholderText}
                    placeholder="Username"
                />
                <TextInput
                    style={style.placeholderText}
                    placeholder="Password"
                />
                <Button title="button" color="#CFD6FF" />
            </View>
        </View>
    );
};

export default Login;

const style = StyleSheet.create({
    judulText: {
        textAlign: "center",
        color: "white",
        fontSize: 50,
    },
    loginText: {
        textAlign: "center",
        marginVertical: 5,
        fontSize: 25,
        fontWeight: "normal",
    },

    placeholderText: {
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
    },

    container: {
        flex: 1,
        backgroundColor: "#070F2B",
        justifyContent: "center",
    },
    loginCard: {
        marginVertical: 15,
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
    },
});
