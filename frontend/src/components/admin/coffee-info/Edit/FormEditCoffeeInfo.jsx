import { useEffect, useState } from 'react';

import InputCoffeeInfo from './InputCoffeeInfo';

function EditFormCoffeeInfo({ coffeeInfo, onButtonEditClick }) {
  const [buttonEdit, setButtonEdit] = useState(true);

  const handleButtonClick = (value) => {
    setButtonEdit(value);
    onButtonEditClick(value);
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
                <InputCoffeeInfo coffeeInfo={coffeeInfo} />
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    handleButtonClick(false);
                  }}
                >
                  Lưu thay đổi
                </button>
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => handleButtonClick(false)}
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

export default EditFormCoffeeInfo;