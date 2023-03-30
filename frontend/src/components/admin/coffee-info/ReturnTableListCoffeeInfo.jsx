import { v4 as uuidv4 } from 'uuid';

import EditCoffeeInfo from './EditCoffeeInfo';

// Function trả về Table chứa các giá trị của ConffeeInfo
// Pass { } để không biến allCoffeeInfo thành Object object mà chỉ còn object
function ReturnTableListCoffeeInfo({ allCoffeeInfo }) {
  console.log(allCoffeeInfo)
  if (allCoffeeInfo.length > 0)
    return allCoffeeInfo.map((coffeeInfo, index) => (
      <tr key={uuidv4()}>
        <td className="p-4 border-2 border-amber-900">{index+1}</td>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_id}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_category_id}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_name}</th>
        <th className="p-4 border-2 border-amber-900">
          <img src={`data:image/*;base64,${coffeeInfo.coffee_image}`} />
        </th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_price}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_ingredient}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_characteristic}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_shelf_life}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_mass}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_instructions}</th>
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_detail}</th>
        <th className="p-4 border-2 border-amber-900">Component Edit ở đây</th>
      </tr>
    ));
  
  return (
    <div>Không nhận được dữ liệu từ cơ sở dữ liệu</div>
  );
};

export default ReturnTableListCoffeeInfo;