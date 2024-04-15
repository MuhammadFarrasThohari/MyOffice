import { View, Button } from "react-native";
import Card from "../components/Card";
import PerformanceCard from "../components/PerformanceCard";
import TaskCard from "../components/TaskCard";
import WageCard from "../components/WageCard";
import { supabase } from "../lib/supabase";

const Home = (props) => {
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
        }
    }

    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <Button title="Sign Out" onPress={signOut} />
            <Card />
            <PerformanceCard
                short_review={props.reviewShort}
                nilai1={props.nilaiAttendance}
                nilai2={props.nilaiQoL}
                nilai3={props.nilaiReliability}
            />
            <TaskCard />
            <WageCard />
        </View>
    );
};

export default Home;
