import express from "express";
import { query } from "../../../database/dbConnection.js";

const router = express.Router();
router.put("./products", (req, res) => {
  res.query(`UPDATE products
SET name = '${req.body.name}', price = '${req.body.price}' , description = '${req.body.description}'
WHERE id = '${req.body.id}'`);

  res.json("product updated successfuly");
});

export default router;
