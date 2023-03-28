const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('./');

router.get('/', async (req, res) => {
  try {
    const getAllaccount = await pool.query(
      `SELECT * FROM account;`
    );
    res.json(getAllaccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getAllaccount = await pool.query(
      `SELECT * FROM account WHERE account_id='${req.params.id}';`
    );
    res.json(getAllaccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { account_id, account_username, account_password, account_displayname } = req.body;
    const newaccount = await pool.query(
      `INSERT INTO account VALUES ('${account_id}', '${account_username}', '${account_password}', '${account_displayname}' );`
    );
    const getAllaccount = await pool.query(
      `SELECT * FROM account WHERE account_id='${account_id}';`
    );
    res.json(getAllaccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { account_id, account_username, account_password, account_displayname } = req.body;
    const changeaccount = await pool.query(
      `UPDATE account SET account_username='${account_username}' WHERE account_id='${account_id}';`
      `UPDATE account SET account_password='${account_password}' WHERE account_id='${account_id}';`
    );
    const getaccount = await pool.query(
      `SELECT * FROM account WHERE account_id='${account_id}';`
    );
    res.json(getaccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});


router.delete('/remove', async (req, res) => {
  try {
    const { account_id } = req.body;
    const removeaccount = await pool.query(
      `DELETE FROM account WHERE account_id='${account_id}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})
module.exports = router;
