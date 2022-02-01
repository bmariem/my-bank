import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import Accounts from "./Components/Accounts";

//Data
import accounts from "./Assets/data/accounts.json";

function App() {
  return (
    <div className="App">
      <Header userName="Etienne" />
      <Accounts accounts={accounts} />
    </div>
  );
}

export default App;
