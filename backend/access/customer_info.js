const Customer_info = require('../models/customer_info');

const getcustomerinfoById = (id) => {
  return new Promise((resolve, reject) => {
    Customer_info.findOne({
      raw: true,
      attributes: [
        'customer_id',
        'customer_name',
        'customer_phone_number',
        'customer_email',
        'customer_address'
      ],
      where: { customer_id: id }
    })
    .then((customer_info) => {
      if (!customer_info) {
        console.warn(`No customer_info found with id ${id}`);
        resolve(null);
      } else {
        console.log(`customer_info found with id ${id}`);
        resolve(customer_info);
      }
    })
    .catch((error) => {
      console.error(`Error finding customer_info with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const getAllcustomer_info = () => {
  return new Promise((resolve, reject) => {
    Customer_info.findAll({
      raw: true,
      attributes: [
        'customer_id',
        'customer_name',
        'customer_phone_number',
        'customer_email',
        'customer_address'
      ]
    })
    .then(Customers_info => {
      const allCustomers = Customers_info.map(customer_info => {
        return {
          customer_id: customer_info.customer_id,
          customer_name: customer_info.customer_name,
          customer_phone_number: customer_info.customer_phone_number,
          customer_email: customer_info.customer_email,
          customer_address: customer_info.customer_address
        }
      });
      console.log(allCustomers);
      resolve(allCustomers);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const createCustomer_info = async (newCustomer_info) => {
  try {
    const customer_infoCreated = await Customer_info.create({
          customer_id: newCustomer_info.customer_id,
          customer_name: newCustomer_info.customer_name,
          customer_phone_number: newCustomer_info.customer_phone_number,
          customer_email: newCustomer_info.customer_email,
          customer_address: newCustomer_info.customer_address
    });
    console.log(`Created customer_info with id ${customer_infoCreated.customer_id}`);
    return customer_infoCreated; // return the created customer_infoCreated object
  } catch (error) {
    console.error(`Error creating customer_info: ${error.message}`);
    return null;
  }
};

const updatecustomer_info = async (id, updateCustomer_infoData) => {
  try {
    const customer_infoUpdated = await Customer_info.update(
    {
      customer_id: updateCustomer_infoData.customer_id,
      customer_name: updateCustomer_infoData.customer_name,
      customer_phone_number: updateCustomer_infoData.customer_phone_number,
      customer_email: updateCustomer_infoData.customer_email,
      customer_address: updateCustomer_infoData.customer_address
    },
    {
      where: { customer_id: id }
    });
    console.log(`Updated customer_info with id ${id}`);
    return customer_infoUpdated;
  } catch (error) {
    console.error(`Error updating customer_info with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteCustomer_info = async (id) => {
  try {
    const customer_infoDeleted = await Customer_info.destroy({
      where: { customer_id: id }
    });
    console.log(`Deleted customer_info with id ${id}`);
    return customer_infoDeleted;
  } catch (error) {
    console.error(`Error deleting customer_info with id ${id}: ${error.message}`);
    return false;
  }
};

module.exports = {
  getcustomerinfoById,
  getAllcustomer_info,
  createCustomer_info,
  updatecustomer_info,
  deleteCustomer_info
};
