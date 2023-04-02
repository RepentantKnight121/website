const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAlldiscount = await pool.query(
      `SELECT * FROM discount;`
    );
    res.status(200).json(getAlldiscount.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getDiscount = await pool.query(
        `SELECT * FROM discount WHERE discount_code_id='${req.params.id}';`
      );
      res.status(200).json(getDiscount.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const { event_name, discount_percent } = req.body;
      const changeDiscount = await pool.query(
        `UPDATE discount SET
          event_name='${event_name},
          discount_percent='${discount_percent}'
          WHERE discount_code_id='${req.params.id}';`
      );
      const getChangeDiscount = await pool.query(
        `SELECT * FROM discount WHERE discount_code_id='${req.params.id}';`
      );
      res.status(200).json(getChangeDiscount.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeDiscount = await pool.query(
        `DELETE FROM discount WHERE discount_code_id='${req.params.id}';`
      );
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
    }
  })
  
router.post('/new', async (req, res) => {
  try {
    const { discount_code_id, event_name, discount_percent } = req.body;
    const newDiscount = await pool.query(
      `INSERT INTO discount VALUES
      ('${discount_code_id}', '${event_name}', '${discount_percent}');`
    );
    const getNewDiscount = await pool.query(
      `SELECT * FROM discount WHERE discount_code_id='${discount_code_id}';`
    );
    res.status(200).json(getNewDiscount.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;