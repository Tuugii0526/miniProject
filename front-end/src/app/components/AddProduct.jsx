"use client";
import { useRef } from "react";
import { XmarkIcon } from "./icons/XmarkIcon";
export const AddProduct = () => {
  const addDialogRef = useRef(null);
  const onAddButtonClick = () => {
    if (addDialogRef.current) {
      addDialogRef.current.showModal();
    }
  };
  const onXMarkClick = () => {
    if (addDialogRef.current) {
      addDialogRef.current.close();
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    onXMarkClick()
    const url = "http://localhost:1234/product/add";
    const product = {
      name: e.target.productName.value,
      category: e.target.productCategory.value,
      price: e.target.productPrice.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    try {
      const response = await fetch(url, options);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <>
      <button class="btn bg-green-400" onClick={onAddButtonClick}>
        Add product
      </button>
      <dialog ref={addDialogRef} class="modal">
        <div class="modal-box">
          <div className="flex items-center gap-[25%]">
            <div onClick={onXMarkClick}>
              <XmarkIcon />
            </div>
            <p className="font-bold text-[25px]">Making a product</p>
          </div>
          <div class="modal-action ">
            <form
              method="dialog"
              className="w-full h-full flex flex-col justify-around gap-1"
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <label htmlFor="productName">
                Product name
                <input
                  class="add-inputs"
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="Product name"
                  required
                />
              </label>
              <label htmlFor="productCategory">
                Product category
                <select
                  class="add-inputs"
                  type="text"
                  id="productCategory"
                  name="productCategory"
                  placeholder="Product category"
                >
                  <option value="Category" selected disabled>
                    Category
                  </option>
                  <option value="T-shirt">T-shirt</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Outer clothes">Outer clothes</option>
                  <option value="Boot">Boot</option>
                </select>
              </label>
              <label htmlFor="productPrice">
                Price
                <input
                  class="add-inputs"
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  placeholder="Price"
                  min={0}
                />
              </label>
              <button type="submit" class="btn bg-green-400 ">
                Add product
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
