import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import cardStyle from "../assets/StyleCard";
import { supabase } from "../lib/supabase";
import getWageData from "../data/data";

const WageCard = ({ Gaji, BaseGaji, BonusGaji, OvertimeGaji }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWageData();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={cardStyle.container}>
            <Text>Wage</Text>
            <Text>Rp. {Gaji}</Text>
            <View style={styles.detailWage}>
                <Text>Detail: {"\n"}</Text>
                <Text>Base: Rp. {BaseGaji}</Text>
                <Text>Bonus: Rp. {BonusGaji}</Text>
                <Text>Overtime: Rp. {OvertimeGaji}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailWage: {
        backgroundColor: "#CFD6FF",
        padding: 10,
        borderRadius: 14,
    },
});

export default WageCard;
