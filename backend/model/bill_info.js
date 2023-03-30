const express = require("express");
const router = express.Router();

// Connect to database
const pool = require("../database/postgresql");

router.get("/", async (req, res) => {
  try {
    const getAllBillInfo = await pool.query(
        `SELECT * FROM bill_info;`
        );
    res.json(getAllBillInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getBillInfo = await pool.query(
      `SELECT * FROM bill_info WHERE bill_id='${req.params.id}';`
    );
    res.json(getBillInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

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
        '${customer_id}',
        '${bill_id}',
        '${discount_code_id}',
        '${address}'
        '${payment_time}');`
    );
    const getNewBillInfo = await pool.query(
      `SELECT * FROM bill_info WHERE bill_id='${bill_id}';`
    );
    res.json(getNewBillInfo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/change", async (req, res) => {
  try {
    const {
      bill_id,
      customer_id,
      discount_code_id,
      address,
      payment_time
    } = req.body;

    const changeBillInfo = await pool.query(
      `UPDATE bill_info SET
        bill_id ='${bill_id}',
        customer_id='${customer_id}',
        discount_code_id='${discount_code_id}',
        address ='${address}',
        payment_time ='${payment_time}'
        WHERE bill_id='${bill_id}';`
    );
    const getBillInfoByID = await pool.query(
      `SELECT * FROM bill_info WHERE bill_id='${bill_id}';`
    );
    res.json(getBillInfoByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { bill_id } = req.body;
    const removeBillInfo = await pool.query(
      `DELETE FROM bill_info WHERE bill_id='${bill_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
