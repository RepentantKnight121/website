const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category;`
    );
    res.status(200).json(getAllCoffeeCategory.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getCoffeeCategory = await pool.query(
        `SELECT * FROM coffee_category WHERE coffee_category_id='${req.params.id}';`
      );
      res.status(200).json(getCoffeeCategory.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const { coffee_category_id, coffee_category_name } = req.body;
      const changeCoffeeCategory = await pool.query(
        `UPDATE coffee_category SET
          coffee_category_name='${coffee_category_name}'
          WHERE coffee_category_id='${req.params.id}';`
      );
      const getCoffeeCategory = await pool.query(
        `SELECT * FROM coffee_category WHERE coffee_category_id='${req.params.id}';`
      );
      res.status(200).json(getCoffeeCategory.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeCoffeeCategory = await pool.query(
        `DELETE FROM coffee_category WHERE coffee_category_id='${req.params.id}';`
      );
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.post('/new', async (req, res) => {
  try {
    const { coffee_category_id, coffee_category_name } = req.body;
    const newCoffeeCategory = await pool.query(
      `INSERT INTO coffee_category VALUES
        '${coffee_category_id}', '${coffee_category_name}');`
    );
    const getCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category WHERE coffee_category_id='${coffee_category_id}';`
    );
    res.status(200).json(getCoffeeCategory.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;