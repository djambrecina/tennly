const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "postgres://localhost:5432/tennly";
const PORT = process.env.PORT || 8000;

export default {
  DB_CONNECTION_STRING,
  PORT
};
