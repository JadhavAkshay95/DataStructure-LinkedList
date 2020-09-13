import React from "react";
import "./App.css";
import { BST } from "./Tree";

function App() {
  let BSTObject = new BST();
  BSTObject.add(10);
  BSTObject.add(5);
  BSTObject.add(20);
  BSTObject.add(2);
  BSTObject.add(3);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => BSTObject.preOrder()}>Click on!</button>
        </p>
      </header>
    </div>
  );
}

export default App;
