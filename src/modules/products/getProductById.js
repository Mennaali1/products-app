import express from "express";
import { query } from "../../../database/dbConnection.js";

const router = express.Router();

//get one product by id
router.get("/products/:id", (req, res) => {
  console.log(req.params);
  query.execute(
    `select * from products where id = '${req.params.id}'`,
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
