import { View } from "react-native";
import Card from "../components/Card";
import PerformanceCard from "../components/PerformanceCard";

const Home = () => {
    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <Card />
            <PerformanceCard />
        </View>
    );
};

export default Home;
