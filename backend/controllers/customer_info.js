const express = require('express');
const router = express.Router();

const CustomerInfo = require('../access/customer_info');

router.get('/', async (req, res) => {
  try {
    const allCustomerInfos = await CustomerInfo.getAllCustomerInfos();
    res.status(200).json(allCustomerInfos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      console.log('Hello')
      const customerinfo = await CustomerInfo.getCustomerInfoById(id);
      if (customerinfo) {
        res.status(200).json(customerinfo);
      } else {
        res.status(404).json({ error: `No customer info found with id ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const updatedCustomerInfoData = req.body;
    try {
      const customerInfoUpdated = await CustomerInfo.updateCustomerInfo(id, updatedCustomerInfoData);
      if (!customerInfoUpdated) {
        res.status(404).json({ error: 'Customer info not found' });
      } else {
        res.status(200).json({ message: `Customer info ${id} has been updated` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    try {
      const customerInfoDeleted = await CustomerInfo.deleteCustomerInfo(id) ;
      if (!customerInfoDeleted) {
        res.status(404).json({ error: 'Coffee category not found' });
      } else {
        res.status(200).json({ message: `Coffee category ${id} has been deleted` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

router.post('/', async (req, res) => {
  const customerInfoData = req.body;
  try {
    const customerInfoCreated = await CustomerInfo.createCustomerInfo(customerInfoData);
    if (!customerInfoCreated) {
      res.status(500).json({ error: 'Error creating customer info' });
    } else {
      res.status(201).json(customerInfoCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;