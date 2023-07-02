import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("database.db");

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)",
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const insertUser = (name, email) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        (_, result) => {
          resolve(result.insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT name, email FROM users",
        [],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (_, result) => {
          if (result.rows.length > 0) {
            resolve(result.rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const updateUserById = (id, name) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE users SET name=? WHERE id=?",
                [name, id],
                (_, result) => {
                    resolve(result.rowsAffected);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })
}

export const deleteUserById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM users WHERE ID=?",
                [id],
                (_, result) => {
                    resolve(result.rowsAffected);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })
}