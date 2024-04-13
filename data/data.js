import { supabase } from "../lib/supabase";

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
        return data;
    } catch (error) {
        throw error;
    }
}

export default getWageData;
