const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllCoffeeInfo = await pool.query(
      `SELECT coffee_id,
              coffee_category_id,
              coffee_name,
              ENCODE(coffee_image,'base64') AS coffee_image,
              coffee_price,
              coffee_detail FROM coffee_info;`
    );
    res.status(200).json(getAllCoffeeInfo.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getCoffeeInfoByID = await pool.query(
        `SELECT coffee_category_id,
                coffee_name,
                ENCODE(coffee_image,'base64') AS coffee_image,
                coffee_price,
                coffee_detail FROM coffee_info WHERE coffee_id='${req.params.id}';`
      );
      res.status(200).json(getCoffeeInfoByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const {
        coffee_category_id,
        coffee_name,
        coffee_image,
        coffee_price,
        coffee_detail
      } = req.body;
  
      const changeCoffeeInfo = await pool.query(
        `UPDATE coffee_info SET
                coffee_category_id='${coffee_category_id}',
                coffee_name='${coffee_name}',
                coffee_image='${coffee_image}',
                coffee_price='${coffee_price}',
                coffee_detail='${coffee_detail}')
                WHERE coffee_id='${req.params.id}';`
      );
      const getChangeCoffeeByID = await pool.query(
        `SELECT * FROM coffee_info WHERE coffee_id='${req.params.id}';`
      );
  
      res.status(200).json(getChangeCoffeeByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {  
      const removeCoffee = await pool.query(
        `DELETE FROM coffee_info WHERE coffee_id='${req.params.id}';`
      );
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.post("/new", async (req, res) => {
  try {
    const {
      coffee_id,
      coffee_category_id,
      coffee_name,
      coffee_image,
      coffee_price,
      coffee_detail
    } = req.body;
    await pool.query(
      `INSERT INTO coffee_info VALUES (
        '${coffee_id}',
        '${coffee_category_id}',
        '${coffee_name}',
        '${coffee_image}',
        '${coffee_price}',
        '${coffee_detail}');`
    );
    const getNewCoffeeInfo = await pool.query(
      `SELECT * FROM coffee_info WHERE coffee_id='${bill_id}';`
    );
    res.status(200).json(getNewCoffeeInfo.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;