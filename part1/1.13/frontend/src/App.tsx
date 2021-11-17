import React from "react";
import "./App.css";

const App = () => {
  const handleSubmit = () => {
    console.log("Create TODO clicked");
  };

  return (
    <div className="App">
      <input maxLength={140} />
      <input onClick={handleSubmit} type="submit" value="Create TODO" />
      <ul>
        <li>TODO 1</li>
        <li>TODO 2</li>
      </ul>
    </div>
  );
};

export default App;
