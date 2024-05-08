import { Text, Button, ScrollView } from "react-native";
import { supabase } from "../../lib/supabase";
import ReviewCard from "../Components/ReviewCard";
import WageCard from "../Components/WageCard";
import { useState } from "react";
import RegisterModal from "../Components/RegisterModal";
import Card from "../Components/AdminProfileCard";

const AdminScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
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
                    setModalVisible(true);
                }}
            />
            <Text>Admin Screen</Text>
            <Button
                title="Logout"
                onPress={async () => await supabase.auth.signOut()}
            />
            <RegisterModal
                visible={modalVisible}
                close={() => setModalVisible(false)}
            />
        </ScrollView>
    );
};

export default AdminScreen;
