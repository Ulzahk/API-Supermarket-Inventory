// const { main } = require("../config/database");

// export const inventoryController = () => {
//   createProduct = async (req, res, next) => {
//     try {
//       const { body } = req;
//       const productCreated = await (await main()).insertOneElement(body);
//       res.status(201).json({
//         message: "Product created",
//         body: productCreated,
//       });
//     } catch (error) {
//       console.log("createProduct: ", error);
//     }
//   };
// };
