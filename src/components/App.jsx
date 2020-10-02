import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const itemText = event.target.value;

    setInputText(itemText);
  }

  function updateItems() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={handleChange} type="text" />
        <button onClick={updateItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
