import { v4 as uuidv4 } from 'uuid';

import EditCoffeeInfo from './EditCoffeeInfo';
import DeleteCoffeeInfo from './DeleteCoffeeInfo';

function TableListCoffeeInfo({ allCoffeeInfo }) {
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
        <th className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_detail}</th>
        <th className="p-4 border-2 border-amber-900"><EditCoffeeInfo id={coffeeInfo.coffee_id}/></th>
        <th className="p-4 border-2 border-amber-900"><DeleteCoffeeInfo id={coffeeInfo.coffee_id}/></th>
      </tr>
    ));
  
  return null;
};

export default TableListCoffeeInfo;
