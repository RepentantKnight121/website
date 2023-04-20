import { useState } from "react";

function AddCoffeeCategory() {
  const [ editCoffeeCategory, setEditCoffeeCategory ] = useState(false);

  const add = async (id, name) => {
    try {
      const jsonData = {
        "coffee_category_id": `${id}`,
        "coffee_category_name": `${name}`
      }
      const request = await fetch("http://localhost:5678/api/coffee-category/", {
        method: "PUT",
        body: JSON.stringtify(coffee_category_name)
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <button
        className="bg-cyan-500 text-black active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setEditCoffeeCategory(true)}
      >
        Thêm
      </button>
  
      {editCoffeeCategory ? <div></div> : null}
    </>
  );
}

export default AddCoffeeCategory();