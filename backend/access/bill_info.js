const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllBillInfo = await pool.query(
        `SELECT * FROM bill_info;`
        );
    res.status(200).json(getAllBillInfo.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getBillInfo = await pool.query(
        `SELECT * FROM bill_info WHERE bill_id='${req.params.id}';`
      );
      res.status(200).json(getBillInfo.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const {
        customer_id,
        discount_code_id,
        address,
        payment_time
      } = req.body;
  
      const changeBillInfo = await pool.query(
        `UPDATE bill_info SET
          customer_id='${customer_id}',
          discount_code_id='${discount_code_id}',
          address='${address}',
          payment_time='${payment_time}'
          WHERE bill_id='${req.params.id}';`
      );
      const getBillInfoByID = await pool.query(
        `SELECT * FROM bill_info WHERE bill_id='${req.params.id}';`
      );
      res.status(200).json(getBillInfoByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeBillInfo = await pool.query(
        `DELETE FROM bill_info WHERE bill_id='${req.params.id}';`
      );
      res.status(200).send('Delete successfully');
    } catch (err) {
      res.status(400);
  }})

router.post("/new", async (req, res) => {
  try {
    const {
      bill_id,
      customer_id,
      discount_code_id,
      address,
      payment_time
    } = req.body;

    const newBillInfo = await pool.query(
      `INSERT INTO bill_info VALUES (
        '${bill_id}',
        '${customer_id}',
        '${discount_code_id}',
        '${address}',
        '${payment_time}');`
    );
    const getNewBillInfo = await pool.query(
      `SELECT * FROM bill_info WHERE bill_id='${bill_id}';`
    );
    res.status(200).json(getNewBillInfo.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;