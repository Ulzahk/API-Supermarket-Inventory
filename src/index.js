const express = require("express");
const api = express();
const cors = require("cors");

api.use(express.json({ extended: true, limit: "5mb" }));
api.use(cors());
//Routes

api.get("/", (req, res, next) => {
  res.send(
    "Server Status: [🟢 Online]\nFor more information go to https://github.com/Ulzahk/API-Supermarket-Inventory"
  );
});
const server = api.listen(3200, (req, res) => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});
