const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('./database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllBilldetail = await pool.query(
      `SELECT * FROM bill_detail;`
    );
    res.json(getAllBilldetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getBilldetail = await pool.query(
      `SELECT * FROM bil_detail WHERE bil_detail_id='${req.params.id}';`
    );
    res.json(getBilldetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { bill_detail_id, bill_id, coffee_id, amount }
    = req.body;
    const newBilldetail = await pool.query(
      `INSERT INTO bill_detail VALUES ('${bill_detail_id}', '${bill_id}', '${coffee_id}', '${amount}');`
    );
    const getnewBilldetail = await pool.query(
      `SELECT * FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );
    res.json(getnewBilldetail.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { bill_detail_id, bill_id, coffee_id, amount } = req.body;
    const changeBilldetail = await pool.query(
      `UPDATE bill_detail SET bill_detail_id='${bill_detail_id}' , bill_id='${bill_id}', coffee_id='${coffee_id}', amount='${amount}'   WHERE bill_detail_id='${bill_detail_id}' ;`
    );
    const getBilldetailByID = await pool.query(
      `SELECT * FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );
    res.json(getBilldetailByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { bill_detail_id } = req.body;
    const removebilldetail = await pool.query(
      `DELETE FROM bill_detail WHERE bill_detail_id='${bill_detail_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
