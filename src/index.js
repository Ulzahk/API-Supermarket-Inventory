const express = require("express");
const api = express();
const cors = require("cors");
const inventoryAPI = require("./routes/InventoryRoute");
const { PORT } = require("./config/env-variables");

api.use(express.json({ extended: true, limit: "5mb" }));
api.use(cors());
inventoryAPI(api);
api.get("/", (req, res, next) => {
  res.send(
    "Server Status: [🟢 Online]\nFor more information go to https://github.com/Ulzahk/API-Supermarket-Inventory"
  );
});
const server = api.listen(PORT, (req, res) => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});
