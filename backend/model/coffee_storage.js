const express = require("express");
const router = express.Router();

// Connect to database
const pool = require("../database/postgresql");

router.get("/", async (req, res) => {
  try {
    const getAllStorage = await pool.query(`SELECT * FROM coffee_storage;`);
    res.json(getAllCustomer.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getStorageID = await pool.query(
      `SELECT * FROM coffee_storage WHERE coffee_id='${req.params.id}';`
    );
    res.json(getUserByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/new", async (req, res) => {
  try {
    const { coffee_id, coffee_amount } = req.body;
    const newCoffeeStorage = await pool.query(
      `INSERT INTO coffee_storage VALUES ('${coffee_id}', '${coffee_amount}');`
    );
    const getNewCoffeeStorage = await pool.query(
      `SELECT * FROM coffee_storage WHERE coffee_id='${customer_id}';`
    );
    res.json(getNewCoffeeStorage.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/change", async (req, res) => {
  try {
    const { coffee_id, coffee_amount } =
      req.body;
    const changeCoffeeStorage = await pool.query(
      `UPDATE coffee_storage SET coffee_amount='${coffee_amount}' WHERE coffee_id='${coffee_id}';`
    );
    const getCoffeeStorageByID = await pool.query(
      `SELECT * FROM coffee_storage WHERE coffee_id='${coffee_id}';`
    );
    res.json(getCoffeeStorageByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { coffee_id } = req.body;
    const removeCoffeeStorage = await pool.query(
      `DELETE FROM coffee_storage WHERE coffee_id='${coffee_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
