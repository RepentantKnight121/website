const CoffeeInfo = require("../models/coffee_info");

const getAllCoffeeInfo = () =>{
  return new Promise((resolve, reject) => {
    CoffeeInfo.findAll({ 
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_category_id',
        'coffee_name',
        'coffee_image',
        'coffee_price',
        'coffee_detail'
      ]
    })
    .then(coffees => {
        const allCoffees = coffees.map(coffee => {
          return {
            coffee_id : coffee.coffee_id ,
            coffee_category_id : coffee.coffee_category_id ,
            coffee_name : coffee.coffee_name ,
            coffee_image: coffee.coffee_image ,
            coffee_price : coffee.coffee_price ,
            coffee_detail : coffee.coffee_detail
          }
        });
        console.log(allCoffees);
        resolve(allCoffees);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
}

const getCoffeeInfoByID = (idCoffee) => {
  return new Promise((resolve, reject) => {
    CoffeeInfo.findOne({ 
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_category_id',
        'coffee_name',
        'coffee_image',
        'coffee_price',
        'coffee_detail'
      ],
      where: { coffee_id: idCoffee }
    })
    .then((Coffee) => {
      if (!Coffee) {
        console.warn(`No coffee info found with id coffee ${idCoffee}`);
        resolve(null);
      } else {
        console.log(`Coffee info found with id coffee  ${idCoffee}`);
        resolve(Coffee);
      }
    })
    .catch((error) => {
      console.error(`Error finding coffee info found with id coffee ${idCoffee}: ${error.message}`);
      reject(error);
    });
  });
};

const deleteCoffeeInfoByID = async (idCoffee) => {
  try {
    const CoffeeStorageDeleted = await CoffeeInfo.destroy({
      where: { coffee_id: idCoffee }
    });
    console.log(`Deleted coffee info with id coffee ${idCoffee}`);
    return CoffeeStorageDeleted;
  } catch (error) {
    console.error(`Error deleting coffee info with id coffee ${idCoffee}: ${error.message}`);
    return false;
  }
};

const updateCoffeeInfo = async ( coffee ) => {
  try {
    const idCoffeeInfo = coffee.coffee_id;
    const CoffeeInfoUpdated = await CoffeeInfo.update(
    {
      coffee_category_id : coffee.coffee_category_id,
      coffee_name : coffee.coffee_name,
      coffee_image : coffee.coffee_image ,
      coffee_price : coffee.coffee_price,
      coffee_detail : coffee.coffee_detail
    },
    {
      where: { coffee_id: idCoffeeInfo }
    });
    console.log(`Updated coffee info with id coffee ${idCoffeeInfo}`);
    return CoffeeInfoUpdated;
  } catch (error) {
    console.error(`Error updating coffee info with id coffee ${idCoffeeInfo} : ${error.message}`);
    return null;
  }
};

const createCoffeeInfo = async ( coffee ) => {
  try {
    const CoffeeInfoCreated = await CoffeeInfo.create(
    {
      coffee_id :coffee.coffee_id ,
      coffee_category_id : coffee.coffee_category_id,
      coffee_name : coffee.coffee_name,
      coffee_image : coffee.coffee_image ,
      coffee_price : coffee.coffee_price,
      coffee_detail : coffee.coffee_detail
    });
    console.log(`Create coffee info !`);
    return CoffeeInfoCreated;
  } catch (error) {
    console.error(`Error creating coffee info with id coffee : ${error.message}`);
    return null;
  }
};

module.exports = {
  getAllCoffeeInfo ,
  getCoffeeInfoByID,
  deleteCoffeeInfoByID,
  updateCoffeeInfo,
  createCoffeeInfo
};
