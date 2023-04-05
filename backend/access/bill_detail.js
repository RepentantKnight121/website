const BillDetail = require("../models/bill_detail");

const getAll = () =>{
  return new Promise((resolve, reject) => {
    BillDetail.findAll({ 
      raw: true,
      attributes: [
        'bill_detail_id',
        'bill_id',
        "coffee_id",
        "bill_amount"
      ]
    })
    .then(details => {
      const allDetail = details.map(detail => {
        return {
          bill_detail_id: detail.bill_detail_id,
          bill_id: detail.bill_id,
          coffee_id: detail.coffee_id,
          bill_amount: detail.bill_amount
        }
      });
      console.log(allDetail);
      resolve(allDetail);
    })
    .catch(err => {
      console.error(err);
      reject(err);
    });
  });
}
// Lấy danh sách bill_detail bằng id Bill
const getDetailByID= (idBill) => {
  return new Promise((resolve, reject) => {
    BillDetail.findAll({ 
      raw: true,
      attributes: [
        'bill_detail_id',
        'bill_id',
        "coffee_id",
        "bill_amount"
      ],
      where: { bill_id: idBill }
    })
    .then((Detail) => {
      if (!Detail) {
        console.warn(`No bill detail found with id bill ${idBill}`);
        resolve(null);
      } else {
        console.log(`Bill detail found with id bill  ${idBill}`);
        resolve(Detail);
      }
    })
    .catch((error) => {
      console.error(`Error finding bill detail found with id bill ${idBill}: ${error.message}`);
      reject(error);
    });
  });
};

const create = async ( idBill,  newBillDetail) => {
  try {
    const BiletailDlCreated = await BillDetail.create({
        bill_detail_id : newBillDetail.bill_detail_id ,
        bill_id : idBill ,
        coffee_id : newBillDetail.coffee_id,
        bill_amount : newBillDetail.bill_amount
    });
    console.log(`Created new bill detail with id ${idBill}`);
    return BiletailDlCreated; 
  } catch (error) {
    console.error(`Error creating new coffee storage: ${error.message}`);
    return null;
  }
};

const remove = async (idDetail) => {
  try {
    const BillDetailDeleted = await BillDetail.destroy({
      where: { bill_detail_id: idDetail }
    });
    console.log(`Deleted bill detail with id  ${idDetail}`);
    return BillDetailDeleted;
  } catch (error) {
    console.error(`Error deleting bill detail with id ${idDetail}: ${error.message}`);
    return false;
  }
};

const update = async (idDetail, dataUpdate) => {
  try {
    const BillDetailUpdated = await BillDetail.update(
    {
        bill_id : dataUpdate.bill_id ,
        coffee_id : dataUpdate.coffee_id,
        bill_amount : dataUpdate.bill_amount
    },
    {
      where: { bill_detail_id : idDetail }
    });
    console.log(`Updated bill detail with id ${idDetail}`);
    return BillDetailUpdated;
  } catch (error) {
    console.error(`Error updating bill detail with id ${idDetail}: ${error.message}`);
    return null;
  }
};

module.exports = {
    getAll,
    update,
    remove,
    create,
    getDetailByID
};
