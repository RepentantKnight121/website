const express = require("express");
const router = express.Router();

// Connect to database
const pool = require("../database/postgresql");

router.get("/", async (req, res) => {
  try {
    const getAllCustomer = await pool.query(`SELECT * FROM customer_info;`);
    res.status(200).json(getAllCustomer.rows);
  } catch (err) {
    res.status(400);
  }
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const getUserByID = await pool.query(
        `SELECT * FROM customer_info WHERE customer_id='${req.params.id}';`
      );
      res.status(200).json(getUserByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const { customer_id, customer_name, phone_number, email, address } =
        req.body;
      const changeCustomer_info = await pool.query(
        `UPDATE customer_info SET
          customer_name='${customer_name}',
          phone_number ='${phone_number}',
          email ='${email}',
          address ='${address}'
          WHERE customer_id='${req.params.id}';`
      );
      const getCustomerInfoByID = await pool.query(
        `SELECT * FROM customer_info WHERE customer_id='${req.params.id}';`
      );
      res.status(200).json(getCustomerInfoByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeUser = await pool.query(
        `DELETE FROM customer_info WHERE customer_id='${req.params.id}';`
      );
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.post("/new", async (req, res) => {
  try {
    const { customer_id, customer_name, phone_number, email, address } =
      req.body;

    const NewUser = await pool.query(
      `INSERT INTO customer_info VALUES
      ('${customer_id}', '${customer_name}', '${phone_number}', '${email}', '${address}');`
    );
    const getNewUser = await pool.query(
      `SELECT * FROM customer_info WHERE customer_id ='${customer_id}';`
    );
    res.status(200).json(getNewUser.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;