import connection from "../config/db.config.js";

const addSchool = async ({ name, address, longitude, latitude }) => {
  const result = await connection.execute(
    "INSERT INTO schools (name, address, longitude, latitude) VALUES (?, ?, ?, ?)",
    [name, address, longitude, latitude]
  );
  return { id: result.insertId, name, address, longitude, latitude };
};
const listSchool = async ({ lat, lng }) => {
  const [rows] = await connection.execute(
    `SELECT 
            id, 
            name, 
            address, 
            latitude, 
            longitude,
            6371 * 2 * ASIN(SQRT(
                POWER(SIN((RADIANS(latitude) - RADIANS(?)) / 2), 2) +
                COS(RADIANS(?)) * COS(RADIANS(latitude)) *
                POWER(SIN((RADIANS(longitude) - RADIANS(?)) / 2), 2)
            )) AS distance_km
        FROM schools
        ORDER BY distance_km ASC
        LIMIT 10`,
    [lat, lat, lng]
  );

  return rows;
};

export  {
  addSchool,
  listSchool,
};
