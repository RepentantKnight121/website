import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [ listCoffeeCategory, setListCoffeeCategory ] = useState([]);
  const [ listCoffeeInfo, setListCoffeeInfo ] = useState([]);
  const [ selectedOption, setSelectedOption] = useState('');

  const getListCoffeeCategory = async () => {
    try {
      const data = await fetch('http://localhost:5678/api/coffee-category/?page=1&limit=8', {
        method: "GET"
      });
      const jsonData = await data.json();
      setListCoffeeCategory(jsonData);
      setSelectedOption(jsonData[0].coffee_category_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getListCoffeeInfo = async () => {
    try {
      const data = await fetch(`http://localhost:5678/api/coffee-info/category/?page=1&limit=8&category=${selectedOption}`, {
        method: "GET"
      });
      const jsonData = await data.json();
      setListCoffeeInfo(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getListCoffeeCategory();
  }, []);

  useEffect(() => {
    getListCoffeeInfo();
  }, [selectedOption])

  console.log(listCoffeeInfo); // null

  const ListCoffeeCategoryOption = ({ listCoffeeCategory }) => {
    return (listCoffeeCategory.map((coffeeCategory) => (
      <option key={uuidv4()}
              value={coffeeCategory.coffee_category_name}>{coffeeCategory.coffee_category_name}</option>
    )))
  }

  const ListCoffeeInfo = (listCoffeeInfo) => {
    return (listCoffeeInfo.map(coffeeInfo => (
      <div key={uuidv4()} className='flex flex-col'>
        <span className="p-4 border-2 border-amber-900">
          <img className='' src={`data:image/*;base64,${coffeeInfo.coffee_image}`} />
        </span>
        <h3 className="p-4 border-2 border-amber-900">{coffeeInfo.coffee_name}</h3>
      </div>
    )))
  }

  return (
    <div>
      <div className="m-auto w-11/12">
        <select name="selectedCoffeeCategory"
                value={selectedOption}
                onChange={handleSelectChange}
                className="p-2">
          {listCoffeeCategory.length > 0 ?
            <ListCoffeeCategoryOption listCoffeeCategory={listCoffeeCategory} /> :
            <div>Không có dữ liệu coffee category từ database!</div>}
        </select>
      </div>
      <div className=''>
      {/*listCoffeeInfo.length > 0 ?
        <ListCoffeeInfo /> :
          <div>Không có dữ liệu coffee info từ database!</div>*/}
      </div>
    </div>
  )
}

function Test() {
  return <div>Home</div>
};

export default Test;