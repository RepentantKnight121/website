import {useState} from 'react';

function ReturnEditCoffeeInfo({ coffeeInfo }) {
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
    <div class="flex">
      <div>
        <img className="mx-auto
                        border-solid border-2
                        w-5/6 h-5/6
                        "
             src={`data:image/*;base64,${info.coffee_image}`} />
        <p className="text-center">{info.coffee_name}</p>
      </div>
      <div>
        <div className="border-solid border-cyan-500 flex">
          <label className="pr-4" for="coffee-category">Coffee category:</label>
          <input type="text"
                 value={info.coffee_category_id}></input>
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee name:</label>
          <input type="text" value={info.coffee_name} />
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
          <input type="text" value={info.coffee_price}></input>
        </div>
        <div className="border-solid border-cyan-500">
          <label className="pr-4">Coffee detail:</label>
          <input type="text" value={info.coffee_detail}></input>
        </div>
      </div>
    </div>
  ));
}

export default ReturnEditCoffeeInfo;