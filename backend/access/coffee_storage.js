const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllStorage = await pool.query(`SELECT * FROM coffee_storage;`);
    res.status(200).json(getAllCustomer.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getStorageID = await pool.query(
        `SELECT * FROM coffee_storage WHERE coffee_id='${req.params.id}';`
      );
      res.status(200).json(getUserByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const coffee_amount =req.body;
      const changeCoffeeStorage = await pool.query(
        `UPDATE coffee_storage SET
          coffee_amount='${coffee_amount}' WHERE coffee_id='${req.params.id}';`
      );
      const getCoffeeStorageByID = await pool.query(
        `SELECT * FROM coffee_storage WHERE coffee_id='${req.params.id}';`
      );
      res.status(200).json(getCoffeeStorageByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeCoffeeStorage = await pool.query(
        `DELETE FROM coffee_storage WHERE coffee_id='${req.params.id}';`
      );
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.post("/new", async (req, res) => {
  try {
    const { coffee_id, coffee_amount } = req.body;
    const newCoffeeStorage = await pool.query(
      `INSERT INTO coffee_storage VALUES ('${coffee_id}', '${coffee_amount}');`
    );
    const getNewCoffeeStorage = await pool.query(
      `SELECT * FROM coffee_storage WHERE coffee_id='${customer_id}';`
    );
    res.status(200).json(getNewCoffeeStorage.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;