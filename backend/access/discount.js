const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAlldiscount = await pool.query(
      `SELECT * FROM discount;`
    );
    res.json(getAlldiscount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getDiscount = await pool.query(
      `SELECT * FROM discount WHERE discount_code_id='${req.params.id}';`
    );
    res.json(getDiscount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { discount_code_id, event_name, discount_percent } = req.body;
    const newDiscount = await pool.query(
      `INSERT INTO discount VALUES ('${discount_code_id}', '${event_name}', '${discount_percent}');`
    );
    const getNewDiscount = await pool.query(
      `SELECT * FROM discount WHERE discount_code_id='${discount_code_id}';`
    );
    res.json(getNewDiscount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { discount_code_id, event_name, discount_percent } = req.body;
    const changeDiscount = await pool.query(
      `UPDATE discount SET
        event_name='${event_name},
        discount_percent='${discount_percent}'
       WHERE discount_code_id='${discount_code_id}';`
    );
    const getChangeDiscount = await pool.query(
      `SELECT * FROM discount WHERE discount_code_id='${discount_code_id}';`
    );
    res.json(getChangeDiscount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { discount_code_id } = req.body;
    const removeDiscount = await pool.query(
      `DELETE FROM discount WHERE discount_code_id='${discount_code_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
