// Untuk mengambil data //

import { supabase } from "../lib/supabase";
import { decode } from "base64-arraybuffer";

async function getUserData() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
        throw error;
    }
    return data.session.user.id;
}

async function getWageData() {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("wage_users")
            .select()
            .eq("user_id", user);
        if (error) {
            throw error;
        }
        return data[0];
    } catch (error) {
        throw error;
    }
}

async function getNilai() {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("performance_users")
            .select()
            .eq("user_id", user);
        if (error) {
            console.log(error);
        }
        return data[0];
    } catch (error) {
        throw error;
    }
}

async function getTaskLimit() {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("task_users")
            .select()
            .eq("id_user", user)
            .limit(3);
        if (error) {
            console.error(error);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

async function getTask() {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("task_users")
            .select()
            .eq("id_user", user);
        if (error) {
            console.error(error);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

async function updateTask(idTask, isChecked) {
    try {
        const { error } = await supabase
            .from("task_users")
            .update({ is_done: isChecked })
            .eq("task_id", idTask);
        if (error) {
            console.error(error);
        }
    } catch (error) {
        throw error;
    }
}

async function addTask(task) {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("task_users")
            .insert({ id_user: user, task: task })
            .select();
        if (error) {
            console.error(error);
        }
        return data;
    } catch (error) {
        throw error;
    }
}

async function getProfile() {
    try {
        const user = await getUserData();
        const { data, error } = await supabase
            .from("profile_users")
            .select()
            .eq("user_id", user);

        return ({ nama_users, jabatan_users, foto_user } = data[0]);
    } catch (error) {
        throw error;
    }
}

async function updateProfile(newNama) {
    try {
        const user = await getUserData();
        const { error } = await supabase
            .from("profile_users")
            .update({ nama_users: newNama })
            .eq("user_id", user);
    } catch (error) {}
}

async function changePhoto(newFoto) {
    try {
        const user = await getUserData();
        const { data, error } = await supabase.storage
            .from("profileusers")
            .upload(
                `${user}/foto/${Date.now().toString()}.jpg`,
                decode(newFoto),
                { contentType: "image/jpg" }
            );

        console.log(data, error);
    } catch (error) {
        throw error;
    }
}

export {
    getWageData,
    getNilai,
    getTask,
    getTaskLimit,
    updateTask,
    addTask,
    getProfile,
    updateProfile,
    changePhoto,
};
