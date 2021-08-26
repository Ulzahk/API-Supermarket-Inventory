const express = require("express");
const {
  createProduct,
  listProducts,
  listOneProductById,
  listProductsByCategory,
  updateProduct,
  deleteProduct,
} = require("../controllers/InventoryController");

const inventoryAPI = api => {
  const router = express.Router();
  api.use("/api/v1/inventory", router);
  router.post("/", createProduct);
  router.get("/", listProducts);
  router.get("/:productId", listOneProductById);
  router.get("/category/:category", listProductsByCategory);
  router.put("/:productId", updateProduct);
  router.delete("/:productId", deleteProduct);
};

module.exports = inventoryAPI;
