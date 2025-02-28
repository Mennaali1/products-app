import express from "express";
import { query } from "../../../database/dbConnection.js";

const router = express.Router();
router.delete("/products", (req, res) => {
  query.execute(`delete from products where id = '${req.body.id}'`);
  res.json("Product deleted");
});

export default router;
