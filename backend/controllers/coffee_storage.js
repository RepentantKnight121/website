const express = require('express');
const router = express.Router();
const Coffee_storage = require('../access/coffee_storage');

router.get('/', async (req, res) => {
  try {
    const allCoffee_storages = await Coffee_storage.getAllCoffe_storage();
    res.status(200).json(allCoffee_storages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:username', async (req, res) => {
  const { id } = req.params;
  try {
    const coffee_storage = await Coffee_storage.getCoffe_storageById(username);
    if (coffee_storage) {
      res.status(200).json(coffee_storage);
    } else {
      res.status(404).json({ error: `No account found with id ${id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const newCoffee_storageData = req.body;
  try {
    const coffee_storageCreated = await Coffee_storage.createCoffe_storage(newCoffee_storageData);
    if (!coffee_storageCreated) {
      res.status(500).json({ error: 'Error creating coffee_storage' });
    } else {
      res.status(201).json(coffee_storageCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedCoffee_storageData = req.body;
  try {
    const coffee_storageUpdated = await Coffee_storage.updateCoffe_storage(updatedCoffee_storageData, updatedAccountData);
    if (!coffee_storageUpdated) {
      res.status(404).json({ error: 'coffee_storage not found' });
    } else {
      res.status(200).json({ message: `coffee_storage ${id} has been updated` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const coffee_storageDeleted = await Coffee_storage.deleteCoffe_storage(id);
    if (!coffee_storageDeleted) {
      res.status(404).json({ error: 'coffee_storage not found' });
    } else {
      res.status(200).json({ message: `coffee_storage ${id} has been deleted` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;