const { connection } = require("../../config/dbConfig");

// Function to get all bus IDs from BUSES_TABLE
const getAllBusIds = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT bus_id FROM BUSES_TABLE";
        connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            } else {
                const busIds = result.map(row => row.bus_id);
                resolve(busIds);
            }
        });
    });
};

// Function to get total seats for a given bus_id from SEATS_TABLE
const getTotalSeatsForBus = (busId) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT COUNT(*) AS totalSeats FROM SEATS_TABLE WHERE bus_id=?";
        connection.query(query, [busId], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0].totalSeats);
            }
        });
    });
};


const getAvailableSeatsForBus = (busId) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT COUNT(*) AS availableSeats FROM SEATS_TABLE WHERE bus_id=? AND status=1";
        connection.query(query, [busId], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0].availableSeats);
            }
        });
    });
};

// Function to insert data into SEATS_AVAILABILITY
const insertSeatsAvailability = (busId, availability, totalSeats) => {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO SEATS_AVAIABILITY (bus_id, availability, total_seats)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE availability = VALUES(availability), total_seats = VALUES(total_seats)
        `;

        connection.query(query, [busId, availability, totalSeats], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};



const main = async () => {
    try {
        const busIds = await getAllBusIds();
        console.log("Bus IDs:", busIds);

        for (const busId of busIds) {
            const totalSeats = await getTotalSeatsForBus(busId);

            const availableSeats = await getAvailableSeatsForBus(busId);

            await insertSeatsAvailability(busId, availableSeats, totalSeats);
            console.log(`Inserted Bus ID: ${busId} into SEATS_AVAILABILITY`);
        }

        console.log("Data insertion completed.");
    } catch (error) {
        console.error("Error:", error);
    } 
};


main();
