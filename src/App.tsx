import React from "react";
import Grettings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says Hello`);
  };
  return (
    <div className="App">
      <Grettings name="Chang Hyun" onClick={onClick}></Grettings>
    </div>
  );
}

export default App;
