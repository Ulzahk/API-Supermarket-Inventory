require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3500,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
  DB_COLLECTION: process.env.DB_COLLECTION,
};
