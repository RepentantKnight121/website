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
    res.json(getAllCoffeeInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getCoffeeInfoByID = await pool.query(
      `SELECT coffee_category_id,
              coffee_name,
              ENCODE(coffee_image,'base64') AS coffee_image,
              coffee_price,
              coffee_detail FROM coffee_info WHERE coffee_id='${req.params.id}';`
    );
    res.json(getCoffeeInfoByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});
1
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

    res.json(getNewCoffeeInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/change", async (req, res) => {
  try {
    const {
      coffee_id,
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
              WHERE coffee_id='${coffee_id}';`
    );
    const getChangeCoffeeByID = await pool.query(
      `SELECT * FROM coffee_info WHERE coffee_id='${coffee_id}';`
    );

    res.json(getChangeCoffeeByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { coffee_id } = req.body;

    const removeCoffee = await pool.query(
      `DELETE FROM coffee_info WHERE coffee_id='${coffee_id}';`
    );

    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
