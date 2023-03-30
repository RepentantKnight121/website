import { useEffect, useState } from 'react';

import ReturnTableListCoffeeInfo from './ReturnTableListCoffeeInfo';

function ListCoffeeInfo() {
  const [ allCoffeeInfo, setAllCoffeeInfo ] = useState([]);

  // function tương tác với API
  const getListCoffeeInfo = async () => {
    try {
      // Lấy dữ liệu từ API, convert thành json và thay đổi giá trị allCoffeeInfo để display table
      const data = await fetch("http://localhost:5678/api/v1/coffee-info/", {
        method: "GET"
      });
      const jsonData = await data.json();
      setAllCoffeeInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const returnComponent = (
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
              <th className="p-4 border-2 border-amber-900">coffee id</th>
              <th className="p-4 border-2 border-amber-900">coffee category id</th>
              <th className="p-4 border-2 border-amber-900">coffee name</th>
              <th className="p-4 border-2 border-amber-900">coffee image</th>
              <th className="p-4 border-2 border-amber-900">coffee price</th>
              <th className="p-4 border-2 border-amber-900">coffee ingredient</th>
              <th className="p-4 border-2 border-amber-900">coffee characteristic</th>
              <th className="p-4 border-2 border-amber-900">coffee shelf_life</th>
              <th className="p-4 border-2 border-amber-900">coffee mass</th>
              <th className="p-4 border-2 border-amber-900">coffee instructions</th>
              <th className="p-4 border-2 border-amber-900">coffee detail</th>
              <th className="p-4 border-2 border-amber-900">Edit</th>
            </tr>
          </thead>
          <tbody>
            <ReturnTableListCoffeeInfo allCoffeeInfo={allCoffeeInfo} />
          </tbody>
        </table>
      </div>
    </div>
  )

  useEffect(() => {
    getListCoffeeInfo();
  }, []);

  return returnComponent;
}

export default ListCoffeeInfo;
