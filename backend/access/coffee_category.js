const CoffeeCategory = require('../models/coffee_category');

const getCoffeeCategoryById = (id) => {
  return new Promise((resolve, reject) => {
    CoffeeCategory.findOne({
      raw: true,
      attributes: [
        'coffee_category_id',
        'coffee_category_name'
      ],
      where: { coffee_category_id: id }
    })
    .then((coffeecategory) => {
      if (!coffeecategory) {
        console.warn(`No coffee category found with id ${id}`);
        resolve(null);
      } else {
        console.log(`Coffee category found with id ${id}`);
        resolve(coffeecategory);
      }
    })
    .catch((error) => {
      console.error(`Error finding coffee category with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const getAllCoffeeCategories = () => {
  return new Promise((resolve, reject) => {
    CoffeeCategory.findAll({
      raw: true,
      attributes: [
        'coffee_category_id',
        'coffee_category_name'
      ]
    })
    .then(coffeecategories => {
      const allCoffeeCategories = coffeecategories.map(coffeecategory => {
        return {
          coffee_category_id: coffeecategory.coffee_category_id,
          coffee_category_name: coffeecategory.coffee_category_name
        }
      });
      console.log(allCoffeeCategories);
      resolve(allCoffeeCategories);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const createCoffeeCategory = async (newCoffeeCategory) => {
  try {
    const coffeeCategoryCreated = await CoffeeCategory.create({
      coffee_category_id: newCoffeeCategory.coffee_category_id,
      coffee_category_name: newCoffeeCategory.coffee_category_name
    });
    console.log(`Created coffee category with id ${newCoffeeCategory.coffee_category_id}`);
    return coffeeCategoryCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating coffee category: ${error.message}`);
    return null;
  }
};

const updateCoffeeCategory = async (id, updatedCoffeeCategory) => {
  try {
    const coffeeCategoryUpdated = await CoffeeCategory.update(
    {
      coffee_category_name: updatedCoffeeCategory.coffee_category_name
    },
    {
      where: { coffee_category_id: id }
    });
    console.log(`Updated coffee category with id ${id}`);
    return coffeeCategoryUpdated;
  } catch (error) {
    console.error(`Error updating coffee category with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteCoffeeCategory = async (id) => {
  try {
    const coffeeCategoryDeleted = await CoffeeCategory.destroy({
      where: { coffee_category_id: id }
    });
    console.log(`Deleted coffee category with id ${id}`);
    return coffeeCategoryDeleted;
  } catch (error) {
    console.error(`Error deleting coffee category with id ${id}: ${error.message}`);
    return false;
  }
};

module.exports = {
  getCoffeeCategoryById,
  getAllCoffeeCategories,
  createCoffeeCategory,
  updateCoffeeCategory,
  deleteCoffeeCategory
};