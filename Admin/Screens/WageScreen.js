import { View, Text } from "react-native";
import card from "../../assets/StyleCard";
import EmployeeWageCard from "../Components/EmployeeWageCard";
import { useEmployeeWage } from "../../data/GajiContext";

const WageScreen = () => {
    const { employeeWage } = useEmployeeWage();

    return (
        <View style={{ backgroundColor: "#070F2B", flex: 1 }}>
            <View style={card.container}>
                <Text>Set Employee Wage</Text>
                {employeeWage.map((employee, index) => (
                    <EmployeeWageCard key={index} metadata={employee} />
                ))}
            </View>
        </View>
    );
};

export default WageScreen;
