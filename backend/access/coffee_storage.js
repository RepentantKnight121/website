const CoffeeStorage = require("../models/coffee_storage");

// Lấy list info về số lượng cà phê dự trữ trong kho
const getAll = (query) => {
  const pageQuery = parseInt(query.page) || 1; // default to page 1 if query.page is not specified or is invalid
  const limitQuery = query.limit;
  const offsetQuery = (pageQuery - 1) * limitQuery;

  return new Promise((resolve, reject) => {
    CoffeeStorage.findAll({ 
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_amount'
      ],
      limit: limitQuery,
      offset: offsetQuery
    })
    .then(coffees => {
      const allCoffees = coffees.map(coffee => {
        return {
          coffee_id: coffee.coffee_id,
          coffee_amount: coffee.coffee_amount
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

// Lấy thông tin về cafe và số lượng dự trữ của nó bởi ID
const getByID = (idCoffee) => {
  return new Promise((resolve, reject) => {
    CoffeeStorage.findOne({ 
      raw: true,
      attributes: [
        'coffee_id',
        'coffee_amount'
      ],
      where: { coffee_id: idCoffee }
    })
    .then((Coffee) => {
      if (!Coffee) {
        console.warn(`No coffee storage found with id coffee ${idCoffee}`);
        resolve(null);
      } else {
        console.log(`Coffee storage found with id coffee  ${idCoffee}`);
        resolve(Coffee);
      }
    })
    .catch((error) => {
      console.error(`Error finding coffee storage found with id coffee ${idCoffee}: ${error.message}`);
      reject(error);
    });
  });
};


// Tạo thông tin về cafe và số lượng dự trữ của nó 
const createNew = async (newCoffeeStorage) => {
  try {
    const id = newCoffeeStorage.coffee_id ;
    const amount = newCoffeeStorage.coffee_amount ;
    const CoffeeStorageCreated = await CoffeeStorage.create({
      coffee_id:           id,
      coffee_amount:   amount 
    }, { fields: ['coffee_id' , 'coffee_amount'] , returning: false } );
    console.log(`Created new coffee storage with coffee id ${CoffeeStorageCreated.coffee_id}`);
    return { id , amount }; // return the created CoffeeStorage object
  } catch (error) {
    console.error(`Error creating new coffee storage: ${error.message}`);
    return null;
  }
};

const deleteByID = async (idCoffee) => {
  try {
    const CoffeeStorageDeleted = await CoffeeStorage.destroy({
      where: { coffee_id: idCoffee }
    });
    console.log(`Deleted coffee storage with id coffee ${idCoffee}`);
    return CoffeeStorageDeleted;
  } catch (error) {
    console.error(`Error deleting coffee storage with id coffee ${idCoffee}: ${error.message}`);
    return false;
  }
};

const updateByID = async (idCoffee , UpdateCoffee_amount) => {
  try {
    const CoffeeStorageUpdated = await CoffeeStorage.update(
    {
      coffee_amount: UpdateCoffee_amount
    },
    {
      where: { coffee_id: idCoffee }
    });
    console.log(`Updated coffee storage with id coffee ${idCoffee}`);
    return CoffeeStorageUpdated;
  } catch (error) {
    console.error(`Error updating coffee storage with id coffee ${idCoffee}: ${error.message}`);
    return null;
  }
};

module.exports = {
  getAll,
  getByID,
  createNew,
  deleteByID,
  updateByID
};
