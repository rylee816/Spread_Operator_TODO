import React, { useState } from "react";

function App() {
  const [itemArray, setItemArray] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;

    setInputText(newItem);
  }

  function pushArray() {
    setItemArray((prevItems) => {
      return [...prevItems, inputText];
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
        <button onClick={pushArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {itemArray.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
