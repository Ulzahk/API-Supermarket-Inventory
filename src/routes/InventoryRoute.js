const express = require("express");
// const { createProduct } = "../controllers/InventoryController";
const { main } = require("../config/database");

const inventoryAPI = api => {
  const router = express.Router();
  api.use("/v1/inventory", router);
  router.post("/", async (req, res, next) => {
    try {
      const { body } = req;
      const productCreated = await (await main()).insertOneElement(body);
      res.status(201).json({
        message: "Product created",
        body: productCreated,
      });
    } catch (error) {
      console.log("createProduct: ", error);
    }
  });
  // router.get("/", listProducts);
  // router.get("/:productId", listProductById);
  // router.put("/:productId", updateProduct);
  // router.delete("/:productId", deleteProduct);
};

module.exports = inventoryAPI;
