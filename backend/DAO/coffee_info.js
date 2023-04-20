const { Op } = require('sequelize');

const CoffeeCategory = require('../models/coffee_category');
const CoffeeInfo = require("../models/coffee_info");

const img = require('../utils/image_encoding');

const getAll = (query) => {
  const pageQuery = parseInt(query.page) || 1;
  const limitQuery = parseInt(query.limit) || 10;
  const offsetQuery = (pageQuery - 1) * limitQuery;
  const search = decodeURI(query.search) || "";
  let category = query.category || "All";

  return new Promise((resolve, reject) => {
    let coffeeFilter = {};
    if (category !== "All") {
      CoffeeCategory.findOne({
        where: {
          coffee_category_id: category
        },
        attributes: ['coffee_category_id'],
        raw: true
      })
      .then(result => {
        coffeeFilter.coffee_category_id = result.coffee_category_id;

        CoffeeInfo.findAll({ 
          where: coffeeFilter,
          attributes: [
            'coffee_id',
            'coffee_category_id',
            'coffee_name',
            'coffee_image',
            'coffee_price',
            'coffee_detail'
          ],
          limit: limitQuery,
          offset: offsetQuery,
          raw: true
        })
        .then(coffees => {
          const allCoffees = coffees.map(({ coffee_id, coffee_category_id, coffee_name, coffee_image, coffee_price, coffee_detail }) => {
            return {
              coffee_id:          coffee_id,
              coffee_category_id: coffee_category_id,
              coffee_name:        coffee_name,
              coffee_image:       img.imageConvert(coffee_image),
              coffee_price:       coffee_price,
              coffee_detail:      coffee_detail
            };
          });
          resolve(allCoffees);
        })
        .catch(error => {
          console.error(error.message);
          reject(error);
        });
      })
      .catch(error => {
        console.error(error.message);
        reject(error);
      });
    } else if (category === 'All') {
      CoffeeInfo.findAll({ 
        attributes: [
          'coffee_id',
          'coffee_category_id',
          'coffee_name',
          'coffee_image',
          'coffee_price',
          'coffee_detail'
        ],
        limit: limitQuery,
        offset: offsetQuery,
        raw: true
      })
      .then(coffees => {
        const allCoffees = coffees.map(({ coffee_id, coffee_category_id, coffee_name, coffee_image, coffee_price, coffee_detail }) => {
          return {
            coffee_id:          coffee_id,
            coffee_category_id: coffee_category_id,
            coffee_name:        coffee_name,
            coffee_image:       img.imageConvert(coffee_image),
            coffee_price:       coffee_price,
            coffee_detail:      coffee_detail
          };
        });
        resolve(allCoffees);
      })
      .catch(error => {
        console.error(error.message);
        reject(error);
      });
    } else {
      coffeeFilter.coffee_name = {
        [Op.like]: `%${search}%`,
      };
      CoffeeInfo.findAll({
          where: coffeeFilter,
          attributes: [
            "coffee_id",
            "coffee_category_id",
            "coffee_name",
            "coffee_image",
            "coffee_price",
            "coffee_detail",
          ],
          limit: limitQuery,
          offset: offsetQuery,
          raw: true,
        })
          .then((coffees) => {
            const allCoffees = coffees.map(
              ({
                coffee_id,
                coffee_category_id,
                coffee_name,
                coffee_image,
                coffee_price,
                coffee_detail,
              }) => {
                return {
                  coffee_id: coffee_id,
                  coffee_category_id: coffee_category_id,
                  coffee_name: coffee_name,
                  coffee_image: img.imageConvert(coffee_image),
                  coffee_price: coffee_price,
                  coffee_detail: coffee_detail,
                };
              }
            );
            resolve(allCoffees)
          })
          .catch((error) => {
            console.error(error.message);
            reject(error);
          });
    }
  });
};

const getByID = (idCoffee) => {
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
    .then((coffee) => {
      if (!coffee) {
        console.warn(`No coffee info found with id coffee ${idCoffee}`);
        resolve(null);
      } else {
        console.log(`Coffee info found with id coffee ${idCoffee}`);
        const coffeeImage = imageConvert(coffee.coffee_image); // convert coffee_image to base64-encoded data
        const coffeeInfo = { ...coffee, coffee_image: coffeeImage }; // create a new object with the converted coffee_image
        resolve(coffeeInfo);
      }
    })
    .catch((error) => {
      console.error(`Error finding coffee info found with id coffee ${idCoffee}: ${error.message}`);
      reject(error);
    });
  });
};

const deleteByID = async (idCoffee) => {
  try {
    const CoffeeInfoDeleted = await CoffeeInfo.destroy({
      where: { coffee_id: idCoffee }
    });
    console.log(`Deleted coffee info with id coffee ${idCoffee}`);
    return CoffeeInfoDeleted;
  } catch (error) {
    console.error(`Error deleting coffee info with id coffee ${idCoffee}: ${error.message}`);
    return false;
  }
};

const updateByID = async ( idCoffee , coffee ) => {
  try {
    console.log(idCoffee) ,
    console.log(coffee);
    const CoffeeInfoUpdated = await CoffeeInfo.update(
    {
      coffee_category_id: coffee.coffee_category_id,
      coffee_name: coffee.coffee_name,
      coffee_image: coffee.coffee_image,
      coffee_price: coffee.coffee_price,
      coffee_detail: coffee.coffee_detail
    },
    {
      where: { coffee_id: idCoffee }
    });
    console.log(`Updated coffee info with id coffee ${idCoffee}`);
    return CoffeeInfoUpdated;
  } catch (error) {
    console.error(`Error updating coffee info with id coffee ${idCoffee} : ${error.message}`);
    return null;
  }
};

const createNew = async ( coffee ) => {
  try {
    const CoffeeInfoCreated = await CoffeeInfo.create(
    {
      coffee_id:          coffee.coffee_id ,
      coffee_category_id: coffee.coffee_category_id,
      coffee_name:        coffee.coffee_name,
      coffee_image:       coffee.coffee_image,
      coffee_price:       coffee.coffee_price,
      coffee_detail:      coffee.coffee_detail
    });
    console.log(`Create coffee info !`);
    return CoffeeInfoCreated;
  } catch (error) {
    console.error(`Error creating coffee info with id coffee : ${error.message}`);
    return null;
  }
};

module.exports = {
  getAll,
  getByID,
  deleteByID,
  updateByID,
  createNew
};
