import { useEffect, useState } from 'react';

import AddCoffeeCategory from './AddCoffeeCategory';

function ButtonAdd() {
  const [ buttonAdd, setButtonAdd ] = useState(false);

  const Add = (
    <button
      className="bg-emerald-500 text-white active:bg-green-600 font-bold uppercase text-sm
                  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex"
        >
        Thêm
    </button>
  )

  return Add;
}

export default ButtonAdd;