import { createContext, useContext, useEffect, useState } from "react";
import { changePhoto, getProfile, updateProfile } from "../data/data";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [nama, setNama] = useState("John Doe");
    const [jabatan, setJabatan] = useState("Jabatan tidak terdeteksi");
    const [foto, setFoto] = useState(require("../assets/snack-icon.png"));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { nama_users, jabatan_users, foto_users } =
                    await getProfile();
                setNama(nama_users);
                setJabatan(jabatan_users);
                if (foto_users !== null) {
                    setFoto({ uri: foto_users });
                }
                console.log("Foto: ", foto_users);
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

    const updateFoto = async (newFoto) => {
        try {
            const fotoBaru = await changePhoto(newFoto);
            setFoto({ uri: fotoBaru }); // Mengatur foto baru setelah berhasil diubah
        } catch (error) {
            console.error("Error updating photo:", error);
        }
    };
    return (
        <ProfileContext.Provider
            value={{ nama, jabatan, foto, updateNama, updateFoto }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
