const express = require('express');
const router = express.Router();
const Customer_info = require('../access/customer_info');

router.get('/', async (req, res) => {
  try {
    const allCustomer_info = await Customer_info.getAllcustomer_info();
    res.status(200).json(allCustomer_info);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const customer_info = await Customer_info.getcustomerinfoById(id);
    if (customer_info) {
      res.status(200).json(customer_info);
    } else {
      res.status(404).json({ error: `No customer_info found with id ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const newCustomer_infoData = req.body;
  try {
    const customer_infoCreated = await Customer_info.createCustomer_info(newCustomer_infoData);
    if (!customer_infoCreated) {
      res.status(500).json({ error: 'Error creating customer_info' });
    } else {
      res.status(201).json(customer_infoCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedCustomer_infoData = req.body;
  try {
    const customer_infoUpdated = await Customer_info.updatecustomer_info(id, updatedCustomer_infoData);
    if (!customer_infoUpdated) {
      res.status(404).json({ error: 'Customer_info not found' });
    } else {
      res.status(200).json({ message: `Customer_info ${id} has been updated` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const customer_infoDeleted = await Customer_info.deleteCustomer_info(id);
    if (!customer_infoDeleted) {
      res.status(404).json({ error: 'Customer_info not found' });
    } else {
      res.status(200).json({ message: `Customer_info ${id} has been deleted` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;