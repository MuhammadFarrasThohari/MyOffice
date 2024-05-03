import { View, Text, Button, ScrollView } from "react-native";
import { supabase } from "../../lib/supabase";
import Card from "../../components/Card";
import ReviewCard from "../Components/ReviewCard";
import WageCard from "../Components/WageCard";

const AdminScreen = () => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <Card />
            <ReviewCard />
            <WageCard />
            <Button
                title="register employee"
                onPress={() => {
                    console.log("employee registered");
                }}
            />
            <Text>Admin Screen</Text>
            <Button
                title="Logout"
                onPress={async () => await supabase.auth.signOut()}
            />
        </ScrollView>
    );
};

export default AdminScreen;
