import * as SQLite from "expo-sqlite";

const database_name = "course_work_native.db";
const database_version = "1.0";
const database_displayname = "Course work Database";
const database_size = 200000;

const db = SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
);

const initDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS HikeEntity (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        Location TEXT,
        DateOfTheHike TEXT,
        ParkingAvailable TEXT,
        HighOfTheLength INTEGER,
        DifficultyLevel TEXT,
        Description TEXT
      );`,
            [],
            () => console.log("Database and table created successfully."),
            (error) => console.log("Error occurred while creating Hike table.", error)
        );
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS ObservationEntity (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                HikeId INTEGER,
                Title TEXT,
                TimeObservation TEXT,
                Comments TEXT,
                FOREIGN KEY (HikeId) REFERENCES HikeEntity (id)
            );`,
            [],
            () => console.log("Observation table created successfully."),
            (error) => console.log("Error occurred while creating the Observation table.", error)
        );
    });
};

const getAllHike = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM HikeEntity",
                [],
                (_, {rows}) => {
                    resolve(rows._array);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
const searchHike = (nameHike) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM HikeEntity WHERE Name LIKE ?",
                [`%${nameHike}%`],
                (_, { rows }) => {
                    resolve(rows._array);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
const resetData = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM ObservationEntity',
                [],
                () => {
                    resolve();
                    console.log("reset table Observation successfully")
                },
                (error) => console.log("reset table Observation  error", error))
            tx.executeSql(
                "DELETE FROM HikeEntity",
                [],
                () => {
                    console.log("reset table Hike successfully")
                    resolve();
                },
                (error) => {
                    console.log("reset table Hike successfully")
                }
            );
        });
    });
}
const getHikeById = (hikeId) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM WHERE id: = ?}`,
                [hikeId],
                (_, {rows}) => {
                    resolve(rows._array);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
const updateHikeById = (name, location, dateHike, radioValue, highOfTheLength, difficultLevel, description, id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE HikeEntity
         SET Name = ?,
             Location = ?,
             DateOfTheHike = ?,
             ParkingAvailable = ?,
             HighOfTheLength = ?,
             DifficultyLevel = ?,
             Description = ?
         WHERE id = ?`,
                [name, location, dateHike, radioValue, highOfTheLength, difficultLevel, description, id],
                (_, {rows}) => {
                    console.log("Hike updated successfully")
                    resolve("Hike updated successfully");
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};
const addObservationsByHikeId = (hikeId, title, timeObservation, comments) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO ObservationEntity (HikeId,Title,TimeObservation,Comments) VALUES(?,?,?,?)",
                [hikeId, title, timeObservation, comments],
                (_, {insertId}) => {
                    resolve(insertId);
                },
                (_, error) => {
                    console.error("Error adding Observation:", error); // Log the error
                    reject(error); // Reject the promise with the error
                }
            )
        })
    })
}
const getObservationByHikeId = (hikeId) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx)=>{
            tx.executeSql(
                `SELECT ObservationEntity.id, ObservationEntity.Title, ObservationEntity.TimeObservation, ObservationEntity.Comments
                             FROM ObservationEntity
                             WHERE ObservationEntity.HikeId = ?`,
                [hikeId],
                (transaction, data)=>{
                    resolve(data.rows._array);
                },
                (error, result)=>{
                    reject(error); // Log the error
                }
            )
        })
    });
}
const deleteObservationById= (observationId) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM ObservationEntity WHERE id = ?",
                [observationId],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
}
const deleteObservationByHikeId= (hikeId) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM ObservationEntity WHERE hikeId = ?",
                [hikeId],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
}

    const deleteHikeById = (id) => {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM HikeEntity WHERE id = ?",
                    [id],
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

    const addHike = (Name, Location, DateOfTheHike, ParkingAvailable, HighOfTheLength, DifficultyLevel, Description) => {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO HikeEntity (Name, Location, DateOfTheHike, ParkingAvailable, HighOfTheLength, DifficultyLevel, Description) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [Name, Location, DateOfTheHike, ParkingAvailable, HighOfTheLength, DifficultyLevel, Description],
                    (_, {insertId}) => {
                        resolve(insertId);
                    },
                    (_, error) => {
                        console.error("Error adding hike:", error); // Log the error
                        reject(error); // Reject the promise with the error
                    }
                );
            });
        });
    };

    const Database = {
        initDatabase,
        addHike,
        getAllHike,
        getHikeById,
        deleteHikeById,
        resetData,
        updateHikeById,
        addObservationsByHikeId,
        getObservationByHikeId,
        deleteObservationByHikeId,
        searchHike,
    };

    export default Database;