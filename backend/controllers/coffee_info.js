const express = require('express');
const router = express.Router();
const CoffeeInfo = require("../access/coffee_info");


router.get('/', async (req, res) => {
  try {
    const getAllCoffeeInfo = await CoffeeInfo.getAllCoffeeInfo();
    res.status(200).json(getAllCoffeeInfo);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getCoffeeInfoByID = await CoffeeInfo.getCoffeeInfoByID(req.params.id);
      res.status(200).json(getCoffeeInfoByID);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      await CoffeeInfo.updateCoffeeStorage(req.body);
      res.send("Updated successfully");
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {  
      await CoffeeInfo.deleteCoffeeInfoByID(req.params.id);
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})
  .post( async (req, res) => {
    const newCoffeeInfo = req.body;
    try {
    const CoffeeInfoCreated = await CoffeeInfo.createCoffeeInfo(newCoffeeInfo);
    if (!CoffeeInfoCreated) {
        res.status(500).json({ error: 'Error creating coffee info' });
      } else {
        res.status(201).json(CoffeeInfoCreated);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;