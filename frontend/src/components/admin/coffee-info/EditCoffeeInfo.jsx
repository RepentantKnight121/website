import { useEffect, useState } from 'react';

function FormEdit({ coffeeInfo, onButtonEditClick }) {
  const [ coffeeName, setCoffeeName ] = useState('');
  const [ coffeeCategory, setCoffeeCategory ] = useState('');
  const [ coffeePrice, setCoffeePrice ] = useState('');
  const [ coffeeDetail, setCoffeeDetail ] = useState('');
  const [image, setImage] = useState(null);

  const [editCoffeeInfo, setEditCoffeeInfo] = useState(coffeeInfo)
  const [buttonEdit, setButtonEdit] = useState(true);

  const handleButtonClick = async (value) => {
    setButtonEdit(value);
    if (!value) {
      await editData(
        coffeeInfo.id,
        coffeeCategory,
        coffeeName,
        image,
        coffeePrice,
        coffeeDetail
      );
    }
    onButtonEditClick(value);
  };

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

  const editData = async (id, category_id, name, image, price, detail) => {
    try {
      const formData = new FormData();
      formData.append('coffee_category_id', category_id);
      formData.append('coffee_name', name);
      formData.append('coffee_image', image);
      formData.append('coffee_price', price);
      formData.append('coffee_detail', detail);
  
      const request = await fetch(`http://localhost:5678/api/coffee-category/${id}`, {
        method: 'PUT',
        body: formData,
      });
  
      // handle the response here
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    buttonEdit && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Chỉnh sửa</h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div>
                  <img src={`data:image/*;base64,${coffeeInfo.coffee_image}`} />
                </div>
                <div className='flex'>
                  <label>Coffee name: </label>
                  <input className="border-solid border-2 rounded-xl"
                        type="text"
                        defaultValue={coffeeInfo.coffee_name}
                        onChange={
                          (event) => {
                            setCoffeeName(event.target.value);
                          }}></input>
                </div>
                <div className='flex'>
                  <label>Coffee category id: </label>
                  <input className="border-solid border-2 rounded-xl"
                        type="text"
                        defaultValue={coffeeInfo.coffee_category_id}
                        onChange={
                          (event) => {
                            setCoffeeCategory(event.target.value);
                          }}></input>
                </div>
                <div className="border-solid border-cyan-500">
                    <label className="pr-4">Coffee image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                      {image && (
                      <img
                        src={image}
                        alt="Selected image"
                        style={{ maxWidth: '25%', marginBottom: '20px' }}
                      />
                      )}
                </div>
                <div className="border-solid border-cyan-500">
                    <label className="pr-4">Coffee price:</label>
                    <input  type="text"
                            defaultValue={coffeeInfo.coffee_price}
                            onChange={(event) => {
                              setCoffeePrice(event.target.value);
                            }}></input>
                  </div>
                  <div className="border-solid border-cyan-500">
                    <label className="pr-4">Coffee detail:</label>
                    <input  type="text"
                            defaultValue={coffeeInfo.coffee_detail}
                            onChange={(event) => {
                              setCoffeeDetail(event.target.value);
                            }}></input>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleButtonClick(false);
                    editData(
                      coffeeInfo.id,
                      coffeeCategory,
                      coffeeName,
                      image,
                      coffeePrice,
                      coffeeDetail
                    );
                  }}
                >
                  Lưu thay đổi
                </button>
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleButtonClick(false);
                  }}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
}

function ButtonEdit({ id }) {
  const [ coffeeInfo, setCoffeeInfo ] = useState([]);
  const [ buttonEdit, setButtonEdit ] = useState(false);

  const handleButtonEditClick = (buttonEdit) => {
    setButtonEdit(!buttonEdit);
  }

  const getCoffeeInfo = async (id) => {
    try {
      const data = await fetch(`http://localhost:5678/api/coffee-info/${id}`, {
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

  const EditComponent = (
    <>
      <button
        className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setButtonEdit(true)}
      >
        Chỉnh sửa
      </button>

      { buttonEdit ? <FormEdit coffeeInfo={coffeeInfo} onButtonEditClick={handleButtonEditClick} /> : null }
    </>
  );

  return EditComponent;
}

export default ButtonEdit;