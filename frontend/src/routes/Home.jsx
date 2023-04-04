import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [ listCoffeeCategory, setListCoffeeCategory ] = useState([]);
  const [ listCoffeeInfo, setListCoffeeInfo ] = useState([])
  const [ selectedOption, setSelectedOption] = useState('');

  const getListCoffeeCategory = async () => {
    try {
      const data = await fetch('http://localhost:5678/api/coffee-category/', {
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
      const data = await fetch('http://localhost:5678/api/coffee-info', {
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

  console.log(listCoffeeInfo);

  console.log(selectedOption)

  const ListCoffeeCategoryOption = ({ listCoffeeCategory }) => {
    return (listCoffeeCategory.map((coffeeCategory) => (
      <option key={uuidv4()}
              value={coffeeCategory.coffee_category_name}>{coffeeCategory.coffee_category_name}</option>
    )))
  }

  const ListCoffeeInfo = () => {

  }

  return (
    <div>
      <div className="m-auto w-11/12">
        <select name="selectedCoffeeCategory"
                value={selectedOption}
                onChange={handleSelectChange}
                className="p-2">
          <ListCoffeeCategoryOption listCoffeeCategory={listCoffeeCategory} />
        </select>
      </div>
      <div>
        <ListCoffeeInfo />
      </div>
    </div>
  )
}
export default Home;