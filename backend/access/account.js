const Account = require('../models/account');

const getAccountByUsername = (username) => {
  return new Promise((resolve, reject) => {
    Account.findOne({
      raw: true,
      attributes: [
        'account_username',
        'account_password',
        'account_displayname',
        'account_email',
        'account_permission'
      ],
      where: { account_username: username }
    })
    .then((account) => {
      if (!account) {
        console.warn(`No account found with username ${username}`);
        resolve(null);
      } else {
        console.log(`Account found with username ${username}`);
        resolve(account);
      }
    })
    .catch((error) => {
      console.error(`Error finding account with username ${username}: ${error.message}`);
      reject(error);
    });
  });
};

const getAllAccounts = () => {
  return new Promise((resolve, reject) => {
    Account.findAll({
      raw: true,
      attributes: [
        'account_username',
        'account_password',
        'account_displayname',
        'account_email',
        'account_permission'
      ]
    })
    .then(accounts => {
      const allAccounts = accounts.map(account => {
        return {
          account_username: account.account_username,
          account_password: account.account_password,
          account_displayname: account.account_displayname,
          account_email: account.account_email,
          account_permission: account.account_permission
        }
      });
      console.log(allAccounts);
      resolve(allAccounts);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const createAccount = async (newAccount) => {
  try {
    const accountCreated = await Account.create({
      account_username: newAccount.account_username,
      account_password: newAccount.account_password,
      account_displayname: newAccount.account_displayname,
      account_email: newAccount.account_email,
      account_permission: newAccount.account_permission
    });
    console.log(`Created account with username ${accountCreated.account_username}`);
    return accountCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating account: ${error.message}`);
    return null;
  }
};

const updateAccount = async (username, updatedAccountData) => {
  try {
    const accountUpdated = await Account.update(
    {
      account_password:    updatedAccountData.account_password,
      account_displayname: updatedAccountData.account_displayname,
      account_email:       updatedAccountData.account_email,
      account_permission:  updatedAccountData.account_permission
    },
    {
      where: { account_username: username }
    });
    console.log(`Updated account(s) with username ${username}`);
    return accountUpdated;
  } catch (error) {
    console.error(`Error updating account with username ${username}: ${error.message}`);
    return null;
  }
};

const deleteAccount = async (username) => {
  try {
    const accountDeleted = await Account.destroy({
      where: { account_username: username }
    });
    console.log(`Deleted account(s) with username ${username}`);
    return accountDeleted;
  } catch (error) {
    console.error(`Error deleting account with username ${username}: ${error.message}`);
    return false;
  }
};

module.exports = {
  getAccountByUsername,
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount
};