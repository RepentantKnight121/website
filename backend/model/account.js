const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllAccount = await pool.query(
      `SELECT * FROM account;`
    );
    res.json(getAllAccount.rows);
  } catch (err) {
    console.error(err.message);
  } 
});

router.get('/:id', async (req, res) => {
  try {
    const getAllAccount = await pool.query(
      `SELECT * FROM account WHERE account_username='${req.params.id}';`
    );
    res.json(getAllAccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { account_username, account_password, account_displayname, email, account_permission } = req.body;
    const newAccount = await pool.query(
      `INSERT INTO account VALUES ('${account_username}', '${account_password}', '${account_displayname}', '${email}', '${account_permission}' );`
    );
    const getNewAccount = await pool.query(
      `SELECT * FROM account WHERE account_username='${account_username}';`
    );
    res.json(getNewAccount.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put('/change', async (req, res) => {
  try {
    const { account_username, account_password, account_displayname, email,account_permission } = req.body;

    const changeAccount = await pool.query(
      `UPDATE account SET
        account_password ='${account_password}',
        account_displayname=${account_displayname}',
        email ='${email}' 
        account_permission ='${account_permission}' 
        WHERE account_username='${account_username}';`
    );
    const getAccountByID = await pool.query(
      `SELECT * FROM account WHERE account_username='${account_username}';`
    );

    res.json(getAccountByID.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete('/remove', async (req, res) => {
  try {
    const { account_username } = req.body;
    const removeAccount = await pool.query(
      `DELETE FROM account WHERE account_username='${account_username}';`
    );
    res.send("Delete successfully");
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
