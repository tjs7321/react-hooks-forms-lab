import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    id:"",
    name:"",
    category:""
  })

  function handleFormChange(event) {
    const name = event.target.name
    const value = event.target.value
    
    setNewItem({
      ...newItem,
      id: uuid(),
      [name] : value
    })
  }
  console.log(newItem)

  function formSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(newItem)
    setNewItem({
      id:"",
      name:"",
      category:""
    })
  }


  return (
    <form
    onSubmit={formSubmit}
    className="NewItem"
    >
      <label>
        Name:
        <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleFormChange}
        />
      </label>

      <label>
        Category:
        <select
        value={newItem.category}
        name="category"
        onChange={handleFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
