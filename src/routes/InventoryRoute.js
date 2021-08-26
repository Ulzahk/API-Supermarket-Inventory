const express = require("express");
// const { createProduct } = "../controllers/InventoryController";
const { main } = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const createProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const productCreated = await (
      await main()
    ).insertOneElement({ ...body, _id: uuidv4() });
    res.status(201).json({
      message: "Product created",
      body: productCreated,
    });
  } catch (error) {
    console.log("createProduct: ", error);
  }
};
const listProducts = async (req, res, next) => {
  try {
    const products = await (await main()).listElements();
    res.status(200).json({
      message: "Products listed",
      quantity: products.length,
      body: products,
    });
  } catch (error) {
    console.log("listProducts: ", error);
  }
};
const listOneProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await (await main()).listOneElementById(productId);
    res.status(200).json({
      message: "Product listed",
      body: product,
    });
  } catch (error) {
    console.log("listOneProduct: ", error);
  }
};
//Categories: dairy, bread, meat, pets, drinks
const listProductsByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const products = await (await main()).listElementsByCategory(category);
    res.status(200).json({
      message: "Products listed",
      quantity: products.length,
      body: products,
    });
  } catch (error) {
    console.log("listProductsByCategory", error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const { productId } = req.params;
    const productUpdated = await (await main()).updateElement(productId, body);
    res.status(200).json({
      message: `Product ${productId} updated`,
      body: productUpdated,
    });
  } catch (error) {
    console.log("updateProduct: ", error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const productDeleted = await (await main()).deleteElement(productId);
    res.status(200).json({
      message: `Product ${productId} deleted`,
      body: productDeleted,
    });
  } catch (error) {
    console.log("deleteProduct: ", error);
  }
};
const inventoryAPI = api => {
  const router = express.Router();
  api.use("/v1/inventory", router);
  router.post("/", createProduct);
  router.get("/", listProducts);
  router.get("/:productId", listOneProductById);
  router.get("/category/:category", listProductsByCategory);
  router.put("/:productId", updateProduct);
  router.delete("/:productId", deleteProduct);
};

module.exports = inventoryAPI;
