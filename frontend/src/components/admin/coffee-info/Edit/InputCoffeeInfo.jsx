import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

function InputCoffeeInfo({ coffeeInfo }) {
  const [ coffeeName, setCoffeeName ] = useState('');
  const [ coffeeCategory, setCoffeeCategory ] = useState('');
  const [ coffeePrice, setCoffeePrice ] = useState('');
  const [ coffeeDetail, setCoffeeDetail ] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return coffeeInfo.map((info) => (
    <div className="flex" key={uuidv4()}>
      <div>
        <img className="mx-auto
                        border-solid border-2
                        w-5/6 h-5/6"
             src={`data:image/*;base64,${info.coffee_image}`} />
        <p className="text-center">{info.coffee_name}</p>
      </div>
      <div>
        <div className="border-solid border-cyan-500 flex">
          <label className="pr-4">Coffee category:</label>
          <input className="border-solid border-2 rounded-xl"
                 type="text"
                 defaultValue={info.coffee_category_id}
                 onChange={() => { }}></input>
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee name:</label>
          <input type="text" defaultValue={info.coffee_name} />
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
            <img
              src={image}
              alt="Selected image"
              style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
            )}
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee price:</label>
          <input type="text" defaultValue={info.coffee_price}></input>
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee detail:</label>
          <input type="text" defaultValue={info.coffee_detail}></input>
        </div>
      </div>
    </div>
  ));
}

export default InputCoffeeInfo;