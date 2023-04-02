const express = require('express');
const router = express.Router();

// Connect to database
const pool = require('../database/postgresql');

router.get('/', async (req, res) => {
  try {
    const getAllAccount = await pool.query(
      `SELECT * FROM account;`
    );
    res.status(200).json(getAllAccount.rows);
  } catch (err) {
    res.status(400);
  } 
});

router
  .route('/:username')
  .get(async (req, res) => {
    try {
      const getAllAccount = await pool.query(
        `SELECT * FROM account WHERE account_username='${req.params.username}';`
      );
      res.status(200).json(getAllAccount.rows);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const {
        account_password,
        account_displayname,
        email,
        account_permission
      } = req.body;
  
      const changeAccount = await pool.query(
        `UPDATE account SET
          account_password ='${account_password}',
          account_displayname=${account_displayname}',
          email ='${email}',
          account_permission='${account_permission}'
          WHERE account_username='${req.params.username}';`
      );
      const getAccountByID = await pool.query(
        `SELECT * FROM account WHERE account_username='${req.params.username}';`
      );
  
      res.status(200).json(getAccountByID.rows);
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      const removeAccount = await pool.query(
        `DELETE FROM account WHERE account_username='${req.params.username}';`
      );
      res.status(200).send('Delete successfully');
    } catch (err) {
      res.status(400)
  }})

router.post('/new', async (req, res) => {
  try {
    const {
      account_username,
      account_password,
      account_displayname,
      email,
      account_permission
    } = req.body;
    const newAccount = await pool.query(
      `INSERT INTO account VALUES (
        '${account_username}',
        '${account_password}',
        '${account_displayname}',
        '${email}',
        '${account_permission}'
        );`
    );
    const getNewAccount = await pool.query(
      `SELECT * FROM account WHERE account_username='${account_username}';`
    );
    res.status(200).json(getNewAccount.rows);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;