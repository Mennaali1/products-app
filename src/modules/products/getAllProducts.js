import { query } from "../../../database/dbConnection.js";
import express from "express";
const router = express.Router();

router.get("/products", (req, res) => {
  query.execute(`select * from products`, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

export default router;
