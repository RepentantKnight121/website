import { useEffect, useState } from 'react';

import TableListCoffeeInfo from './TableListCoffeeInfo';
import AddCoffeeInfo from './AddCoffeeInfo';

function ListCoffeeInfo() {
  const [ allCoffeeInfo, setAllCoffeeInfo ] = useState([]);

  const getListCoffeeInfo = async () => {
    try {
      // Lấy dữ liệu từ API
      // convert thành json và thay đổi giá trị allCoffeeInfo để display table
      const data = await fetch(`http://localhost:5678/api/coffee-info/?page=1&limit=8`, {
        method: "GET"
      });
      const jsonData = await data.json();
      setAllCoffeeInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  function checkDataHave(allCoffeeInfo) {
    if (!allCoffeeInfo && allCoffeeInfo.length === 0)
      return false;
    
    return true;
  }

  const listCoffeeInfo = (
    <div className="table-fixed flex justify-center items-center">
      <div  className="m-auto
                       w-5/6 h-5/6">
        <div className="flex">
          <AddCoffeeInfo />
          <button className="bg-red-500 text-black active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">Xóa</button>
        </div>
        <table>
          <thead>
            <tr>
              <td className="p-4 border-2 border-amber-900">Numerical order</td>
              <th className="p-4 border-2 border-amber-900">coffee id</th>
              <th className="p-4 border-2 border-amber-900">coffee category id</th>
              <th className="p-4 border-2 border-amber-900">coffee name</th>
              <th className="p-4 border-2 border-amber-900">coffee image</th>
              <th className="p-4 border-2 border-amber-900">coffee price</th>
              <th className="p-4 border-2 border-amber-900">coffee detail</th>
              <th className="p-4 border-2 border-amber-900">Edit</th>
              <th className="p-4 border-2 border-amber-900">Delete</th>
            </tr>
          </thead>
          <tbody>
            {checkDataHave(allCoffeeInfo) ?
              <TableListCoffeeInfo allCoffeeInfo={allCoffeeInfo} /> :
              <div>Không tìm thấy dữ liệu của coffee info.</div>}
          </tbody>
        </table>
      </div>
    </div>
  )

  useEffect(() => {
    getListCoffeeInfo();
  }, []);

  return listCoffeeInfo;
}

export default ListCoffeeInfo;
