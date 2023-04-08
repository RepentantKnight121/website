const express = require('express');
const router = express.Router();
const CoffeeStorage = require('../access/coffee_storage');

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const getAllCoffeeStorage = await CoffeeStorage.getAll(query);
    res.status(200).json(getAllCoffeeStorage);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getListStorage = await CoffeeStorage.getByID(req.params.id);
      res.status(200).json(getListStorage);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      const idCoffeeStorage = req.params.id;  
      await CoffeeStorage.updateCoffeeStorage(idCoffeeStorage, req.params.coffee_amount);
      //const getCoffeeStorageByID = await getCoffeeStorageByID(idCoffeeStorage);
      //res.status(200).json(getCoffeeStorageByID);
      res.send("Updated successfully");
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {
      await CoffeeStorage.deleteByID(req.params.id);
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.post( "/" , async (req, res) => {
    const newCoffeeStorage = req.body;
    try {
    const CoffeeStorageCreated = await CoffeeStorage.createNew(newCoffeeStorage);
    if (!CoffeeStorageCreated) {
        res.status(500).json({ error: 'Error creating coffee storage' });
      } else {
        res.status(201).json(CoffeeStorageCreated);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
