import React from "react";

type GreetingsProps = {
  name: string;
  mark: String;
  optional?: string;
  onClick: (name: string) => void;
};

function Grettings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Grettings.defaultProps = {
  mark: "!",
};

export default Grettings;
