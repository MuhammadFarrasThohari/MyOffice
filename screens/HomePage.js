import { ScrollView } from "react-native";
import Card from "../components/Card";
import PerformanceCard from "../components/PerformanceCard";
import TaskCard from "../components/TaskCard";
import WageCard from "../components/WageCard";

const Home = (props) => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#070F2B",
                flex: 1,
            }}
        >
            <Card />
            <PerformanceCard
                short_review={props.reviewShort}
                nilai1={props.nilaiAttendance}
                nilai2={props.nilaiQoL}
                nilai3={props.nilaiReliability}
            />
            <TaskCard />
            <WageCard />
        </ScrollView>
    );
};

export default Home;
