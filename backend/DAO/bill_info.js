const BillInfo = require('../models/bill_info');

const getAll = (query) => {
  const pageQuery = parseInt(query.page) || 1; // default to page 1 if query.page is not specified or is invalid
  const limitQuery = query.limit;
  const offsetQuery = (pageQuery - 1) * limitQuery;

  return new Promise((resolve, reject) => {
    BillInfo.findAll({
      raw: true,
      attributes: [
        'bill_id',
        'customer_id',
        'discount_id',
        'customer_address',
        'payment_time'
      ],
      limit: limitQuery,
      offset: offsetQuery
    })
    .then(billsinfo => {
      const allBillsInfo = billsinfo.map(billinfo => {
        return {
          bill_id: billinfo.bill_id,
          customer_id: billinfo.customer_id,
          discount_id: billinfo.discount_id,
          customer_address: billinfo.customer_address,
          payment_time: billinfo.payment_time
        }
      });
      console.log(allBillsInfo);
      resolve(allBillsInfo);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const getByID = (id) => {
  return new Promise((resolve, reject) => {
    BillInfo.findOne({
      raw: true,
      attributes: [
        'bill_id',
        'customer_id',
        'discount_id',
        'customer_address',
        'payment_time'
      ],
      where: { bill_id: id }
    })
    .then((billinfo) => {
      if (!billinfo) {
        console.warn(`No bill info found with id ${id}`);
        resolve(null);
      } else {
        console.log(`Bill info found with id ${id}`);
        resolve(billinfo);
      }
    })
    .catch((error) => {
      console.error(`Error finding discount with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const createNew = async (billinfo) => {
  try {
    const billInfoCreated = await BillInfo.create({
      bill_id: billinfo.bill_id,
      customer_id: billinfo.customer_id,
      discount_id: billinfo.discount_id,
      customer_address: billinfo.customer_address,
      payment_time: billinfo.payment_time
    });
    console.log(`Created bill info with id ${billinfo.bill_id}`);
    return billInfoCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating bill info: ${error.message}`);
    return null;
  }
};

const updateByID = async (id, billinfo) => {
  try {
    const billInfoUpdated = await BillInfo.update(
    {
      customer_id: billinfo.customer_id,
      discount_id: billinfo.discount_id,
      customer_address: billinfo.customer_address,
      payment_time: billinfo.payment_time
    },
    {
      where: { bill_id: id }
    });
    console.log(`Updated bill info with id ${id}`);
    return billInfoUpdated;
  } catch (error) {
    console.error(`Error updating bill info with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteByID = async (id) => {
  try {
    const billInfoDeleted = await BillInfo.destroy({
      where: { bill_id: id }
    });
    console.log(`Deleted bill info with id ${id}`);
    return billInfoDeleted;
  } catch (error) {
    console.error(`Error deleting bill info with id ${id}: ${error.message}`);
    return false;
  }
};

module.exports = {
  getAll,
  getByID,
  createNew,
  updateByID,
  deleteByID
};