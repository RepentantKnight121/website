import { useEffect, useState } from 'react';

import FormEditCoffeeInfo from './FormEditCoffeeInfo';

function EditCoffeeInfo({ id }) {
  const [ coffeeInfo, setCoffeeInfo ] = useState([]);
  const [ buttonEdit, setButtonEdit ] = useState(false);

  const handleButtonEditClick = (buttonEdit) => {
    setButtonEdit(!buttonEdit);
  }

  const getCoffeeInfo = async (id) => {
    try {
      const data = await fetch(`http://localhost:5678/api/v1/coffee-info/${id}`, {
        method: "GET",
      });
      const jsonData = await data.json();
      setCoffeeInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getCoffeeInfo(id);
  }, [buttonEdit]);

  const EditCoffeeInfoComponent = (
    <>
      <button
        className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setButtonEdit(true)}
      >
        Chỉnh sửa
      </button>
  
      { buttonEdit ? <FormEditCoffeeInfo coffeeInfo={coffeeInfo} onButtonEditClick={handleButtonEditClick} /> : null }
    </>
  );

  return EditCoffeeInfoComponent;
}

export default EditCoffeeInfo;