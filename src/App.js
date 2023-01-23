import React, { useState } from 'react';
import './App.css';


function App() {
  //state React Hooks
  const [newItem, setNewItem] = useState('') ;
  const [items, setItems] = useState([]);
  const [editedItem, setEditedItem] = useState('');

  const addItem = () => {
    if(!newItem) {
      alert("please add items")
      return;
    }
  
    const newItemObject = {
      id: Math.floor(Math.random()*1000),
      name: newItem,
    }
    //adding new item to items (state) array
    setItems((currentItemsList) => [...currentItemsList, newItemObject]);
    //Reset newItem back to the original state
    setNewItem('');
  }
  const deleteItem = (id) => {
  const newArray = items.filter((item) => item.id !== id)
  setItems(newArray);
  }

const editItem = (id, newName) => {
const currentItem = items.filter((item) => item.id === id)[0];

const updatedItem = {
  id: currentItem.id,
  name: newName,
  }
  deleteItem(id);
  setItems((oldItems) => [...oldItems, updatedItem]);
}

console.log('item: ', items);
  return (
    <div className="App">
        <h1>
          My TODO List
        </h1>
      <div className="App-container">
        <input type="text" placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        {/* the add to list button */}
        <button onClick={() => addItem()}>Add</button>
        <ul>
          {items.map((item) => {
            return(
              <li key={item.id}>
                {item.name}
                <div key={item.id}>
                  <input type="text" value={editedItem} onchang={(e) => setEditedItem(e.target.value)}/>
                  <button onClick={() => editItem(item.id, editedItem)}> Edit </button>
                </div>
                <button onClick={() => deleteItem(item.id)}> Delete </button>
              </li>
            )
          })}
        </ul>
      </div>   
    </div>
  );
}

export default App;
