"use client"
import { useRef } from "react"
import { XmarkIcon } from "./icons/XmarkIcon";
export const Nav=()=>{
    const addDialogRef=useRef(null)
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
    const onSubmit = (e) => {};

    return (
      <div className="w-full h-fit flex justify-center items-center py-5 shadow-sm">
        <button class="btn bg-green-400" onClick={onAddButtonClick}>
          Add product
        </button>
        <dialog ref={addDialogRef} class="modal">
          <div class="modal-box" >
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
                    <option value="Category" disabled>
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
      </div>
    );
}
