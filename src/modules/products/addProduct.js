import express from "express";
import { query } from "../../../database/dbConnection.js";

const router = express.Router();

router.post("/products", (req, res) => {
  query.execute(
    `insert into products (name, price, description) values ('${req.body.name}','${req.body.price}','${req.body.description}')`
  );
  res.json("products added");
});

export default router;
