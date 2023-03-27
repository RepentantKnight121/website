const express = require('express');
const router = express.Router();
const { createAccount, authenticate, updateAccount, deleteAccount } = require('./accountController');

// Tạo tài khoản mới
router.post('/', async (req, res) => {
  try {
    const { accountId, username, password, displayName, email } = req.body;
    const newAccountId = await createAccount(accountId, username, password, displayName, email);
    return res.status(201).json({
      message: 'Tạo tài khoản mới thành công',
      data: { account_id: newAccountId, username, displayName, email },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Đăng nhập và xác thực tài khoản
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const account = await authenticate(username, password);
    return res.status(200).json({
      message: 'Đăng nhập thành công',
      data: { account_id: account.account_id, username: account.account_username, displayName: account.account_displayname, email: account.email },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Cập nhật thông tin tài khoản
router.put('/:account_id', async (req, res) => {
  try {
    const accountId = req.params.account_id;
    const { username, password, displayName, email } = req.body;
    const result = await updateAccount(accountId, username, password, displayName, email);
    if (result === 0) {
      return res.status(404).json({ message: 'Tài khoản không tồn tại' });
    }
    return res.status(200).json({ message: 'Cập nhật thông tin tài khoản thành công', data: { account_id: accountId, username, displayName, email } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

