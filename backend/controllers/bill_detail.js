const express = require('express');
const router = express.Router();

const BillDetail = require("../access/bill_detail");

router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const getAllBillDetail = await BillDetail.getAll(query);
    res.status(200).json(getAllBillDetail);
  } catch (err) {
    res.status(400);
  }
});

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const getBillDetail = await BillDetail.getByID(req.params.id);
      res.status(200).json(getBillDetail);
    } catch (err) {
      res.status(400);
  }})
  .put(async (req, res) => {
    try {
      await BillDetail.updateByID( req.params.id , req.body);
      res.send('Updated successfully');
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
  }})
  .delete(async (req, res) => {
    try {      
      await  BillDetail.deleteByID(req.params.id);
      res.status(200).send('Delete successfully');
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
  }})

router.post('/', async (req, res) => {
  try {
    await BillDetail.createNew(req.body);
    res.status(200).send('Create successfully');;
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;