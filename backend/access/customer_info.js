const CustomerInfo = require('../models/customer_info');

const getAll = (query) => {
  const pageQuery = parseInt(query.page) || 1; // default to page 1 if query.page is not specified or is invalid
  const limitQuery = query.limit;
  const offsetQuery = (pageQuery - 1) * limitQuery;

  return new Promise((resolve, reject) => {
    CustomerInfo.findAll({
      raw: true,
      attributes: [
        'customer_id',
        'account_username',
        'customer_name',
        'customer_phone_number',
        'customer_email',
        'customer_address'
      ],
      limit: limitQuery,
      offset: offsetQuery,
    })
    .then(customerinfos => {
      const allCustomerInfos = customerinfos.map(customerinfo => {
        return { 
          customer_id:           customerinfo.customer_id,
          account_username:      customerinfo.account_username,
          customer_name:         customerinfo.customer_name,
          customer_phone_number: customerinfo.customer_phone_number,
          customer_email:        customerinfo.customer_email,
          customer_address:      customerinfo.customer_address
        }
      });
      console.log(allCustomerInfos);
      resolve(allCustomerInfos);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
};

const getByID = (id) => {
  return new Promise((resolve, reject) => {
    CustomerInfo.findOne({
      raw: true,
      attributes: [
        'customer_id',
        'account_username',
        'customer_name',
        'customer_phone_number',
        'customer_email',
        'customer_address'
      ],
      where: { customer_id: id }
    })
    .then((customerinfo) => {
      if (!customerinfo) {
        console.warn(`No customer info found with id ${id}`);
        resolve(null);
      } else {
        console.log(`Customer info found with id ${id}`);
        resolve(customerinfo);
      }
    })
    .catch((error) => {
      console.error(`Error finding customer info with id ${id}: ${error.message}`);
      reject(error);
    });
  });
};

const createNew = async (newCustomerInfo) => {
  try {
    const customerInfoCreated = await CustomerInfo.create({
      customer_id:           newCustomerInfo.customer_id,
      account_username:      newCustomerInfo.account_username,
      customer_name:         newCustomerInfo.customer_name,
      customer_phone_number: newCustomerInfo.customer_phone_number,
      customer_email:        newCustomerInfo.customer_email,
      customer_address:      newCustomerInfo.customer_address
    });
    console.log(`Created customer info with id ${customerInfoCreated.discount_id}`);
    return customerInfoCreated; // return the created account object
  } catch (error) {
    console.error(`Error creating customer info: ${error.message}`);
    return null;
  }
};

const updateByID = async (id, updatedCustomerInfoData) => {
  try {
    const customerInfoUpdated = await CustomerInfo.update(
    {
      account_username:      updatedCustomerInfoData.account_username,
      customer_name:         updatedCustomerInfoData.customer_name,
      customer_phone_number: updatedCustomerInfoData.customer_phone_number,
      customer_email:        updatedCustomerInfoData.customer_email,
      customer_address:      updatedCustomerInfoData.customer_address
    },
    {
      where: { customer_id: id }
    });
    console.log(`Updated customer info with id ${id}`);
    return customerInfoUpdated;
  } catch (error) {
    console.error(`Error updating customer info with id ${id}: ${error.message}`);
    return null;
  }
};

const deleteByID = async (id) => {
  try {
    const customerInfoDeleted = await CustomerInfo.destroy({
      where: { customer_id: id }
    });
    console.log(`Deleted customer info with id ${id}`);
    return customerInfoDeleted;
  } catch (error) {
    console.error(`Error deleting customer info with id ${id}: ${error.message}`);
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