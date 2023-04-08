const express = require('express');
const router = express.Router();

const Account = require('../access/account');

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const allAccounts = await Account.getAll(query);
    res.status(200).json(allAccounts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router
  .route('/:username')
  .get(async (req, res) => {
    const { username } = req.params;
    try {
      const account = await Account.getByUsername(username);
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ error: `No account found with username ${username}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    const username = req.params.username;
    const updatedAccountData = req.body;
    try {
      const accountUpdated = await Account.updateAccount(username, updatedAccountData);
      if (!accountUpdated) {
        res.status(404).json({ error: 'Account not found' });
      } else {
        res.status(200).json({ message: `Account ${username} has been updated` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    const username = req.params.username;
    try {
      const accountDeleted = await Account.deleteAccount(username);
      if (!accountDeleted) {
        res.status(404).json({ error: 'Account not found' });
      } else {
        res.status(200).json({ message: `Account ${username} has been deleted` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
  const newAccountData = req.body;
  try {
    const accountCreated = await Account.createAccount(newAccountData);
    if (!accountCreated) {
      res.status(500).json({ error: 'Error creating account' });
    } else {
      res.status(201).json(accountCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;