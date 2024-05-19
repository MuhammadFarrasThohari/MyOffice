import { useEffect, useState, useContext, createContext } from "react";
import { supabase } from "../lib/supabase";

const EmployeeWageContext = createContext();

export const EmployeeWageProvider = ({ children }) => {
    const [employeeWage, setEmployeeWage] = useState([]);
    useEffect(() => {
        const getEmployeeWage = async () => {
            try {
                const { data, error } = await supabase
                    .from("profile_users")
                    .select(
                        `user_id, nama_users, jabatan_users, foto_users, wage_users(gaji_pokok, gaji_lembur, gaji_bonus)`
                    )
                    .eq("isAdmin", false);
                if (error) {
                    console.error(
                        "Error fetching employee data:",
                        error.message
                    );
                    return;
                }
                setEmployeeWage(data);
            } catch (error) {
                console.error("Error fetching employee data:", error.message);
            }
        };
        getEmployeeWage();
    }, []);

    const updateWage = async (id, data) => {
        try {
            const { gaji_pokok, gaji_lembur, gaji_bonus } = data;
            //check apakah data ada atau tidak
            const { data: exist, error } = await supabase
                .from("wage_users")
                .select("user_id")
                .eq("user_id", id);

            if (error) {
                console.error("Error fetching wage data:", error.message);
                return;
            }
            if (exist.length > 0) {
                const { error } = await supabase
                    .from("wage_users")
                    .update({
                        gaji_pokok: gaji_pokok,
                        gaji_lembur: gaji_lembur,
                        gaji_bonus: gaji_bonus,
                    })
                    .eq("user_id", id);
                if (error) {
                    console.error("Error updating wage data:", error.message);
                    return;
                }
                console.log("Data updated successfully: ", gaji_bonus);
            } else {
                const { error } = await supabase.from("wage_users").insert([
                    {
                        user_id: id,
                        gaji_pokok: gaji_pokok,
                        gaji_lembur: gaji_lembur,
                        gaji_bonus: gaji_bonus,
                    },
                ]);
                if (error) {
                    console.error("Error inserting wage data:", error.message);
                    return;
                }
                console.log("Data inserted successfully");
            }
        } catch (error) {
            console.error("Error updating wage data:", error.message);
        }
    };

    return (
        <EmployeeWageContext.Provider value={{ employeeWage, updateWage }}>
            {children}
        </EmployeeWageContext.Provider>
    );
};

export const useEmployeeWage = () => useContext(EmployeeWageContext);
