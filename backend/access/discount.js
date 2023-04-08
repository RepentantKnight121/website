const Discount = require('../models/discount');

const getAll = (query) => {
  const pageQuery = parseInt(query.page) || 1; // default to page 1 if query.page is not specified or is invalid
  const limitQuery = query.limit;
  const offsetQuery = (pageQuery - 1) * limitQuery;

  return new Promise((resolve, reject) => {
    Discount.findAll({
      raw: true,
      attributes: [
        'discount_id',
        'discount_event_name',
        'discount_percent'
      ],
      limit: limitQuery,
      offset: offsetQuery,
    })
    .then(discounts => {
      const allDiscounts = discounts.map(discount => {
        return {
          discount_id:         discount.discount_id,
          discount_event_name: discount.discount_event_name,
          discount_percent:    discount.discount_percent
        }
      });
      console.log(allDiscounts);
      resolve(allDiscounts);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const getByID = (id) => {
  return new Promise((resolve, reject) => {
    Discount.findOne({
      raw: true,
      attributes: [
        'discount_id',
        'discount_event_name',
        'discount_percent'
      ],
      where: { discount_id: id }
    })
    .then((discount) => {
      if (!discount) {
        console.warn(`No discount found with id ${id}`);
        resolve(null);
      } else {
        console.log(`Discount found with id ${id}`);
        resolve(discount);
      }
    })
    .catch((error) => {
      console.error(`Error finding discount with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const createNew = async (newDiscount) => {
  try {
    const discountCreated = await Discount.create({
      discount_id:         newDiscount.discount_id,
      discount_event_name: newDiscount.discount_event_name,
      discount_percent:    newDiscount.discount_percent
    });
    console.log(`Created discount with id ${discountCreated.discount_id}`);
    return discountCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating discount: ${error.message}`);
    return null;
  }
};

const updateByID = async (id, updatedDiscountData) => {
  try {
    const discountUpdated = await Discount.update(
    {
      discount_event_name: updatedDiscountData.discount_event_name,
      discount_percent:    updatedDiscountData.discount_percent
    },
    {
      where: { discount_id: id }
    });
    console.log(`Updated discount with id ${id}`);
    return discountUpdated;
  } catch (error) {
    console.error(`Error updating discount with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteByID = async (id) => {
  try {
    const discountDeleted = await Discount.destroy({
      where: { discount_id: id }
    });
    console.log(`Deleted discount with id ${id}`);
    return discountDeleted;
  } catch (error) {
    console.error(`Error deleting discount with id ${id}: ${error.message}`);
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