import db from "./database";

function deleteDatabase() {
    db.closeSync();
    db.deleteAsync();
}

export default deleteDatabase;
