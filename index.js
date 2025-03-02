import express from "express";
import cors from "cors";
import getAllProducts from "./src/modules/products/getAllProducts.js";
import addProduct from "./src/modules/products/addProduct.js";
import deleteProduct from "./src/modules/products/deleteProduct.js";
import updateProduct from "./src/modules/products/updateProduct.js";
import searchProduct from "./src/modules/products/searchProduct.js";
import getProductById from "./src/modules/products/getProductById.js";
var app = express();
app.use(express.json());
app.use(cors());
app.use(getAllProducts);
app.use(addProduct);
app.use(deleteProduct);
app.use(updateProduct);
app.use(searchProduct);
app.use(getProductById);

app.listen(3000, () => {
  console.log("server is running");
});
