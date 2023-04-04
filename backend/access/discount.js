const Discount = require('../models/discount');

const getDiscountById= (id) => {
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

const getAllDiscounts = () => {
  return new Promise((resolve, reject) => {
    Discount.findAll({
      raw: true,
      attributes: [
        'discount_id',
        'discount_event_name',
        'discount_percent'
      ]
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

const createDiscount = async (newDiscount) => {
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

const updateDiscount = async (id, updatedDiscountData) => {
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

const deleteDiscount = async (id) => {
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
  getDiscountById,
  getAllDiscounts,
  createDiscount,
  updateDiscount,
  deleteDiscount
};