const DB_CONNECTION_STRING: string = process.env.DB_CONNECTION_STRING || "postgres://localhost:5432/tennly";
const PORT: number = parseInt(process.env.PORT || "8000", 10);

export default {
  DB_CONNECTION_STRING,
  PORT
};
