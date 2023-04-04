const Coffe_storage = require('../models/coffee_storage');

const getCoffe_storageById = (id) => {
  return new Promise((resolve, reject) => {
    Coffe_storage.findOne({
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_amount'
      ],
      where: { coffee_id: id }
    })
    .then((coffee_storage) => {
      if (!coffee_storage) {
        console.warn(`No coffee_storageDeleted found with id ${id}`);
        resolve(null);
      } else {
        console.log(`Coffee_storageDeleted found with id ${id}`);
        resolve(coffee_storage);
      }
    })
    .catch((error) => {
      console.error(`Error finding coffee_storageDeleted with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const getAllCoffe_storage = () => {
  return new Promise((resolve, reject) => {
    Coffe_storage.findAll({
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_amount'
      ]
    })
    .then(coffee_storages => {
      const allCoffee_storages = coffee_storages.map(coffee_storage => {
        return {
          coffee_id: coffee_storage.coffee_id,
          coffee_amount: coffee_storage.coffee_amount
        }
      });
      console.log(allCoffee_storages);
      resolve(allCoffee_storages);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const createCoffe_storage = async (newCoffee_storage) => {
  try {
    const Coffee_storageCreated = await Coffe_storage.create({
      coffee_id: newCoffee_storage.coffee_id,
      coffee_amount: newCoffee_storage.coffee_amount
    });
    console.log(`Created coffee_storageDeleted with id ${Coffee_storageCreated.coffee_id}`);
    return Coffee_storageCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating coffee_storageDeleted: ${error.message}`);
    return null;
  }
};

const updateCoffe_storage = async (id, updatedCoffee_storage) => {
  try {
    const coffee_storageUpdated = await Coffe_storage.update(
    {
      coffee_id: updatedCoffee_storage.coffee_id,
      coffee_amount: updatedCoffee_storage.coffee_amount
    },
    {
      where: { coffee_id: id }
    });
    console.log(`Updated coffee_storageDeleted(s) with id ${id}`);
    return coffee_storageUpdated;
  } catch (error) {
    console.error(`Error updating coffee_storageDeleted with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteCoffe_storage = async (id) => {
  try {
    const coffee_storageDeleted = await Account.destroy({
      where: { coffee_id: id }
    });
    console.log(`Deleted coffee_storageDeleted(s) with id ${id}`);
    return coffee_storageDeleted;
  } catch (error) {
    console.error(`Error deleting coffee_storageDeleted with id ${id}: ${error.message}`);
    return false;
  }
};

module.exports = {
  getCoffe_storageById,
  getAllCoffe_storage,
  createCoffe_storage,
  updateCoffe_storage,
  deleteCoffe_storage
};