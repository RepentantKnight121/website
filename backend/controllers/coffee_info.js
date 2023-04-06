const express = require('express');
const router = express.Router();
const CoffeeInfo = require("../access/coffee_info");


router.get('/', async (req, res) => {
  try {
    const getAllCoffeeInfo = await CoffeeInfo.getAll();
    res.status(200).json(getAllCoffeeInfo);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getCoffeeInfoByID = await CoffeeInfo.getByID(req.params.id);
      res.status(200).json(getCoffeeInfoByID);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      await CoffeeInfo.updateByID( req.params.id , req.body );
      res.send("Updated successfully");
    } catch (err) {
      res.status(400);
  }})
  .delete(async (req, res) => {
    try {  
      await CoffeeInfo.deleteByID(req.params.id);
      res.status(200).send("Delete successfully");
    } catch (err) {
      res.status(400);
  }})

router.get('/search', async (req, res) => {
  const queryData = req.query;
  try {
    const CoffeeInfoByCoffeeCategory = await CoffeeInfo.getSameCategory(queryData);
    if (!CoffeeInfoByCoffeeCategory) {
        res.status(500).json({ error: 'Error finding coffee info have same coffee category' });
      } else {
        res.status(201).json(CoffeeInfoByCoffeeCategory);
      }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const newCoffeeInfo = req.body;
  try {
    const CoffeeInfoCreated = await CoffeeInfo.createNew(newCoffeeInfo);
    if (!CoffeeInfoCreated) {
        res.status(500).json({ error: 'Error creating coffee info' });
      } else {
        res.status(201).json(CoffeeInfoCreated);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

module.exports = router;