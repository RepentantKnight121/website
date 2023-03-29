import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import EditCoffeeCategory from './EditCoffeeCategory';

function ListCoffeeCategory() {
  const [allCoffeeCategory, setAllCoffeeCategory] = useState([]);

  const getListCoffeeCategory = async () => {
    try {
      const response = await fetch("http://localhost:5678/api/v1/coffee-category/");
      const jsonData = await response.json();
      setAllCoffeeCategory(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getListCoffeeCategory();
  }, []);

  return (
    <div className="table-fixed flex justify-center items-center">
      <div>
        <div>
          <button className="bg-emerald-500 text-black active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Thêm
          </button>
          <button className="bg-red-500 text-black active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">Xóa</button>
        </div>
        <table >
          <thead>
            <tr>
              <td className="p-4 border-2 border-amber-900">Numerical order</td>
              <th className="p-4 border-2 border-amber-900">Coffee category id</th>
              <th className="p-4 border-2 border-amber-900">Coffee category name</th>
              <th className="p-4 border-2 border-amber-900">Edit</th>
            </tr>
          </thead>
          <tbody>
            {allCoffeeCategory.length > 0 && allCoffeeCategory.map((coffeeCategory) => (
              <tr key={uuidv4()}>
                <th className="p-6 border-2 border-amber-900">1</th>
                <th className="p-4 border-2 border-amber-900">{coffeeCategory.coffee_category_id}</th>
                <th className="p-4 border-2 border-amber-900">{coffeeCategory.coffee_category_name}</th>
                <th className="border-2 border-amber-900"><EditCoffeeCategory /></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListCoffeeCategory;