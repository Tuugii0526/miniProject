export const CreateForm=()=>{
    return <form
    className="w-1/2 h-1/2 flex flex-col justify-around gap-1 m-auto"
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
        defaultValue=""
      >
        <option value="Category"  disabled>
        Select a category
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
}