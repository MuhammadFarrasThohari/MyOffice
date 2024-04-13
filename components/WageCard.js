import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import cardStyle from "../assets/StyleCard";
import getWageData from "../data/data";

// Wage Card untuk menampung data gaji karyawan

const WageCard = () => {
    const [gajiPokok, setGajiPokok] = useState(0);
    const [gajiLembur, setGajiLembur] = useState(0);
    const [gajiBonus, setGajiBonus] = useState(0);

    const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { gaji_pokok, gaji_lembur, gaji_bonus } =
                    await getWageData();
                setGajiPokok(gaji_pokok);
                setGajiLembur(gaji_lembur);
                setGajiBonus(gaji_bonus);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={cardStyle.container}>
            <Text>Wage</Text>
            <Text>{formatter.format(gajiPokok + gajiBonus + gajiLembur)}</Text>
            <View style={cardStyle.second_container}>
                <Text>Detail: {"\n"}</Text>
                <Text>Base: {formatter.format(gajiPokok)}</Text>
                <Text>Bonus: {formatter.format(gajiBonus)}</Text>
                <Text>Overtime: {formatter.format(gajiLembur)}</Text>
            </View>
        </View>
    );
};

export default WageCard;
