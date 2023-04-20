const express = require('express');
const router = express.Router();

const BillInfo = require('../DAO/bill_info');

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const allBillsInfo = await BillInfo.getAll(query);
    res.status(200).json(allBillsInfo);
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
      const billinfo = await BillInfo.getByID(id);
      if (billinfo) {
        res.status(200).json(billinfo);
      } else {
        res.status(404).json({ error: `No bill info found with id ${id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    const id = req.params.id;
    const updatedBillInfo = req.body;
    try {
      const billInfoUpdated = await BillInfo.updateByID(id, updatedBillInfo);
      if (!billInfoUpdated) {
        res.status(404).json({ error: 'Bill info not found' });
      } else {
        res.status(200).json({ message: `Bill info ${id} has been updated` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    try {
      const billInfoDeleted = await BillInfo.deleteByID(id) ;
      if (!billInfoDeleted) {
        res.status(404).json({ error: 'Bill info not found' });
      } else {
        res.status(200).json({ message: `Bill info ${id} has been deleted` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

router.post('/', async (req, res) => {
  const newBillInfo = req.body;
  try {
    const billInfoCreated = await BillInfo.createNew(newBillInfo);
    if (!billInfoCreated) {
      res.status(500).json({ error: 'Error creating bill info' });
    } else {
      res.status(201).json(billInfoCreated);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;