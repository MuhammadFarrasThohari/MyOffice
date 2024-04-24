import { createContext, useContext, useEffect, useState } from "react";
import { getProfile, updateProfile } from "../data/data";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [nama, setNama] = useState("John Doe");
    const [jabatan, setJabatan] = useState("Jabatan tidak terdeteksi");
    const [foto, setFoto] = useState(require("../assets/snack-icon.png"));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { nama_users, jabatan_users, foto_user } =
                    await getProfile();
                setNama(nama_users);
                setJabatan(jabatan_users);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const updateNama = async (newNama) => {
        try {
            await updateProfile(newNama);
            setNama(newNama);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <ProfileContext.Provider value={{ nama, jabatan, foto, updateNama }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
