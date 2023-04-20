import { useEffect, useState } from 'react';

function ButtonDelete() {
  const [ buttonDelete, setButtonDelete ] = useState(false);

  const DeleteComponent = (
    <button
      className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm
                  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex"
      onClick={() => {
        setButtonDelete(true);
      }}
        >
        Xóa
    </button>
  )

  return DeleteComponent;
}

export default ButtonDelete;