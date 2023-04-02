import { useState } from 'react';

//import ListCoffeeCategory from './admin/coffee-category/ListCoffeeCategory';
import ListCoffeeInfo from './admin/coffee-info/ListCoffeeInfo';

function AdminOption() {
  const [ optionDisplay, setOptionDisplay ] = useState('');

  const AdminOptionComponent = (
    <div>
      <div className="flex justify-center">
        <button className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => { setOptionDisplay('coffee-info') }}>
          Coffee Info</button>
        <button className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => { setOptionDisplay('coffee-category') }}>
          Coffee Category</button>
      </div>
      {optionDisplay === '' && null}
      {optionDisplay === 'coffee-info' && <ListCoffeeInfo />}
      {/*optionDisplay === 'coffee-category' && <ListCoffeeCategory />*/}
    </div>
  );

  return AdminOptionComponent;
}

export default AdminOption;
