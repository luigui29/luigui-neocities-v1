import sqlite3 from "sqlite3";

/* Connect to DB */
// TODO: Connect to db outside directory
const db = new sqlite3.Database("creatures_js_test_1.db", sqlite3.OPEN_READONLY);

/* Define a function that fetches all rows matching a query */
/* Wrapped to make it reusable -- TODO: Export as module */

const fetch_all = async (db, sql, params) => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    })
}

/* Just read through u'll get it */

try {
    const creatures = await fetch_all(db, "SELECT * FROM creatures");
    console.log(creatures);
} catch (err) {
    console.log(err);
} finally {
    db.close();
}