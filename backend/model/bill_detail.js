const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllBillDetail = await pool.query(
      `SELECT * FROM bill_detail;`
    );
    res.json(getAllBillDetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getBillDetail = await pool.query(
      `SELECT * FROM bill_detail WHERE bill_detail_id='${req.params.id}';`
    );
    res.json(getBillDetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

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
    
    res.json(getNewBillDetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { bill_detail_id, bill_id, coffee_id, bill_amount } = req.body;
    
    const changeBillDetail = await pool.query(
      `UPDATE bill_detail SET
        bill_detail_id='${bill_detail_id}',
        bill_id='${bill_id}',
        coffee_id='${coffee_id}',
        bill_amount='${bill_amount}'
        WHERE bill_detail_id='${bill_detail_id}' ;`
    );
    const getBillDetailByID = await pool.query(
      `SELECT * FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );

    res.json(getBillDetailByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { bill_detail_id } = req.body;
    
    const removeBillDetail = await pool.query(
      `DELETE FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );

    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
