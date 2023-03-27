const express = require("express");
const router = express.Router();

// Connect to database
const pool = require("./database/postgresql");

router.get("/", async (req, res) => {
  try {
    const getAllCustomer = await pool.query(`SELECT * FROM customer_info;`);
    res.json(getAllCustomer.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getUserByID = await pool.query(
      `SELECT * FROM customer_info WHERE customer_id='${req.params.id}';`
    );
    res.json(getUserByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/new", async (req, res) => {
  try {
    const { customer_id, customer_name, phone_number, email, address } =
      req.body;

    const NewUser = await pool.query(
      `INSERT INTO customer_info VALUES ('${customer_id}', '${customer_name}', '${phone_number}', '${email}' , '${address}');`
    );
    const getNewUser = await pool.query(
      `SELECT * FROM customer_info WHERE customer_id ='${customer_id}';`
    );
    res.json(getNewUser.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/change", async (req, res) => {
  try {
    const { customer_id, customer_name, phone_number, email, address } =
      req.body;
    const changeCustomer_info = await pool.query(
      `UPDATE customer_info SET customer_name ='${customer_name}' , phone_number ='${phone_number}'
       ,email ='${email}'  , address ='${address}'   WHERE customer_id='${customer_id}';`
    );
    const getCustomerInfoByID = await pool.query(
      `SELECT * FROM customer_info WHERE customer_id='${customer_id}';`
    );
    res.json(getCustomerInfoByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/remove", async (req, res) => {
  try {
    const { customer_id } = req.body;
    const removeUser = await pool.query(
      `DELETE FROM customer_info WHERE customer_id='${customer_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
