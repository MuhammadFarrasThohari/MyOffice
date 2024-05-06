import { useEffect, useState, useContext, createContext } from "react";
import { supabase } from "../lib/supabase";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [reviewedEmployee, setReviewedEmployee] = useState([]);
    const [notReviewedEmployee, setNotReviewedEmployee] = useState([]);

    useEffect(() => {
        const getEmployee = async () => {
            try {
                const { data, error } = await supabase
                    .from("profile_users")
                    .select(
                        `user_id, nama_users, jabatan_users, foto_users, performance_users(nilai, short_review, full_review)`
                    )
                    .eq("isAdmin", false);

                if (error) {
                    console.error(
                        "Error fetching employee data:",
                        error.message
                    );
                    return;
                }

                const notReviewed = data.filter(
                    (employee) => !employee.performance_users
                );

                const reviewed = data.filter(
                    (employee) => employee.performance_users
                );

                setNotReviewedEmployee(notReviewed);
                setReviewedEmployee(reviewed);
            } catch (error) {
                console.error("Error fetching employee data:", error.message);
            }
        };

        getEmployee();
    }, []);

    const getEmployee = async () => {
        try {
            const { data, error } = await supabase
                .from("profile_users")
                .select(
                    `user_id, nama_users, jabatan_users, foto_users, performance_users(nilai, short_review, full_review)`
                )
                .eq("isAdmin", false);

            if (error) {
                console.error("Error fetching employee data:", error.message);
                return;
            }

            const notReviewed = data.filter(
                (employee) => !employee.performance_users
            );

            const reviewed = data.filter(
                (employee) => employee.performance_users
            );

            setNotReviewedEmployee(notReviewed);
            setReviewedEmployee(reviewed);
        } catch (error) {
            console.error("Error fetching employee data:", error.message);
        }
    };

    const updateReview = async (
        full_review,
        short_review,
        attendance,
        qow,
        reliability,
        id
    ) => {
        try {
            // Cek apakah ada record untuk pengguna dengan user_id tertentu
            const { data: existingRecord, error } = await supabase
                .from("performance_users")
                .select()
                .eq("user_id", id);

            if (error) {
                console.error("Error fetching existing record:", error.message);
                return;
            }

            if (existingRecord && existingRecord.length > 0) {
                // Jika record sudah ada, lakukan operasi update
                const { error } = await supabase
                    .from("performance_users")
                    .update({
                        full_review: full_review,
                        short_review: short_review,
                        nilai: {
                            Attendance: attendance,
                            QoW: qow,
                            Reliability: reliability,
                        },
                    })
                    .eq("user_id", id);

                if (error) {
                    console.error("Error updating review:", error.message);
                    return;
                }
            } else {
                // Jika record belum ada, lakukan operasi insert
                const { error } = await supabase
                    .from("performance_users")
                    .insert([
                        {
                            user_id: id,
                            full_review: full_review,
                            short_review: short_review,
                            nilai: {
                                Attendance: attendance,
                                QoW: qow,
                                Reliability: reliability,
                            },
                        },
                    ]);

                if (error) {
                    console.error("Error inserting review:", error.message);
                    return;
                }
            }

            // Setelah update atau insert selesai, perbarui state dari employee
            getEmployee();
        } catch (error) {
            console.error("Error updating/inserting review:", error.message);
        }
    };

    return (
        <EmployeeContext.Provider
            value={{ reviewedEmployee, notReviewedEmployee, updateReview }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployee = () => useContext(EmployeeContext);
