const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category;`
    );
    res.json(getAllCoffeeCategory.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category WHERE coffee_category_id='${req.params.id}';`
    );
    res.json(getCoffeeCategory.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { coffee_category_id, coffee_category_name } = req.body;
    const newCoffeeCategory = await pool.query(
      `INSERT INTO coffee_category VALUES ('${coffee_category_id}', '${coffee_category_name}');`
    );
    const getCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category WHERE coffee_category_id='${coffee_category_id}';`
    );
    res.json(getCoffeeCategory.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { coffee_category_id, coffee_category_name } = req.body;
    const changeCoffeeCategory = await pool.query(
      `UPDATE coffee_category SET coffee_category_name='${coffee_category_name}' WHERE coffee_category_id='${coffee_category_id}';`
    );
    const getCoffeeCategory = await pool.query(
      `SELECT * FROM coffee_category WHERE coffee_category_id='${coffee_category_id}';`
    );
    res.json(getCoffeeCategory.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { coffee_category_id } = req.body;
    const removeCoffeeCategory = await pool.query(
      `DELETE FROM coffee_category WHERE coffee_category_id='${coffee_category_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
