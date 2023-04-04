const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllBillDetail = await pool.query(
      `SELECT * FROM bill_detail;`
    );
    res.status(200).json(getAllBillDetail.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route(':/id')
  .get(async (req, res) => {
    try {
      const getBillDetail = await pool.query(
        `SELECT * FROM bill_detail WHERE bill_detail_id='${req.params.id}';`
      );
      res.status(200).json(getBillDetail.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const { bill_id, coffee_id, bill_amount } = req.body;
      
      const changeBillDetail = await pool.query(
        `UPDATE bill_detail SET
          bill_id='${bill_id}',
          coffee_id='${coffee_id}',
          bill_amount='${bill_amount}'
          WHERE bill_detail_id='${req.params.id}' ;`
      );
      const getBillDetailByID = await pool.query(
        `SELECT * FROM bill_detail WHERE bill_detail_id='${req.params.id}';`
      );
  
      res.status(200).json(getBillDetailByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {      
      const removeBillDetail = await pool.query(
        `DELETE FROM bill_detail WHERE bill_detail_id='${req.params.id}';`
      );
  
      res.status(200).send('Delete successfully');
    } catch (err) {
      res.status(400);
  }})

router.post('/new', async (req, res) => {
  try {
    const { bill_detail_id, bill_id, coffee_id, bill_amount } = req.body;
    
    const newBillDetail = await pool.query(
      `INSERT INTO bill_detail VALUES (
        '${bill_detail_id}', '${bill_id}', '${coffee_id}', '${bill_amount}');`
    );
    const getNewBillDetail = await pool.query(
      `SELECT * FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );
    
    res.status(200).json(getNewBillDetail.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;