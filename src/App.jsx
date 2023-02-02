import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    setList([...list, { title: text, done: false, id: list.length }]);
    setText("");
  };

  const handleDone = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

const TodoItem = ({ item, handleDone, handleDelete }) => (
  <div className={item.done ? "done" : ""}>
    <div>{item.title}</div>
    <button className="donebutton" onClick={() => handleDone(item.id)}>
      {item.done ? "Undo" : "Done"}
    </button>
    <button className="deletebutton" onClick={() => handleDelete(item.id)}>Delete</button>
  </div>
);


export default App;
