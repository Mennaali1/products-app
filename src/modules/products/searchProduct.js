import express from "express";
import { query } from "../../../database/dbConnection.js";

const router = express.Router();
router.get("/products/search", (req, res) => {
  const searchQuery = req.query.name;
  query.execute(
    `select * from products where name like '%${searchQuery}%'`,
    (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

export default router;
