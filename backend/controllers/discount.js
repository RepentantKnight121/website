const express = require('express');
const router = express.Router();

const Discount = require('../DAO/discount');

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const allDiscounts = await Discount.getAll(query);
    res.status(200).json(allDiscounts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router
  .route(':/id')
  .get(async (req, res) => {
    const id = req.params.id;
    try {
      const discount = await Discount.getByID(id);
      if (discount) {
        res.status(200).json(discount);
      } else {
        res.status(404).json({ error: `No discount found with id ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const updatedDiscountData = req.body;
    try {
      const discountUpdated = await Discount.updateByID(id, updatedDiscountData);
      if (!discountUpdated) {
        res.status(404).json({ error: 'Discount not found' });
      } else {
        res.status(200).json({ message: `Discount ${id} has been updated` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    try {
      const discountDeleted = await Discount.deleteByID(id);
      if (!discountDeleted) {
        res.status(404).json({ error: 'Discount not found' });
      } else {
        res.status(200).json({ message: `Discount ${id} has been deleted` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

router.post('/', async (req, res) => {
  const newDiscountData = req.body;
  try {
    const discountCreated = await Discount.createNew(newDiscountData);
    if (!discountCreated) {
      res.status(500).json({ error: 'Error creating account' });
    } else {
      res.status(201).json(discountCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;