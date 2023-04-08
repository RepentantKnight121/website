const express = require('express');
const router = express.Router();

const CoffeeCategory = require('../access/coffee_category');

router.get('/', async (req, res) => {
  try {
    const allCoffeeCategories = await CoffeeCategory.getAll();
    res.status(200).json(allCoffeeCategories);
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
      const coffeecategory = await CoffeeCategory.getCoffeeCategoryById(id);
      if (coffeecategory) {
        res.status(200).json(coffeecategory);
      } else {
        res.status(404).json({ error: `No coffee category found with id ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const updatedCoffeeCategoryData = req.body;
    try {
      const coffeeCategoryUpdated = await CoffeeCategory.updateCoffeeCategory(id, updatedCoffeeCategoryData);
      if (!coffeeCategoryUpdated) {
        res.status(404).json({ error: 'Coffee category not found' });
      } else {
        res.status(200).json({ message: `Coffee category ${id} has been updated` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    try {
      const coffeeCategoryDeleted = await CoffeeCategory.deleteCoffeeCategory(id) ;
      if (!coffeeCategoryDeleted) {
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
  const newCoffeeCatetoryData = req.body;
  try {
    const coffeeCategoryCreated = await CoffeeCategory.createCoffeeCategory(newCoffeeCatetoryData);
    if (!coffeeCategoryCreated) {
      res.status(500).json({ error: 'Error creating coffee category' });
    } else {
      res.status(201).json(coffeeCategoryCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;