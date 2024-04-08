import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("myOffice");
console.log(db._name);

// Fungsi untuk membuat tabel users
const createUsersTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            );`,
            [],
            // Callback jika berhasil
            () => {
                console.log("Tabel users berhasil dibuat");
                // Panggil fungsi untuk memasukkan data username "andi" dan password "andi23" setelah tabel dibuat
            },
            // Callback jika terjadi error
            (error) =>
                console.log("Terjadi error saat membuat tabel users:", error)
        );
    });
};

// Fungsi untuk memasukkan data username dan password ke dalam tabel users
const insertUserData = (username, password) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO users (username, password) VALUES (?, ?)`,
            [username, password],
            // Callback jika berhasil
            () => console.log("Data user berhasil dimasukkan"),
            // Callback jika terjadi error
            (error) =>
                console.log("Terjadi error saat memasukkan data user:", error)
        );
    });
};

// Panggil fungsi untuk membuat tabel users saat aplikasi dijalankan
createUsersTable();

export default db;
