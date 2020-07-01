import React from "react";
import Grettings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says Hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <Grettings name="Chang Hyun" onClick={onClick}></Grettings>
      <Counter></Counter>
      <MyForm onSubmit={onSubmit}></MyForm>
    </div>
  );
}

export default App;
