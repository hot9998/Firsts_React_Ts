import React, { useState } from "react";
import { type } from "os";

function Counter() {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecreae = () => setCount(count - 1);

  type Information = { name: string; description: string };
  const [info, setInfo] = useState<Information | null>(null);

  type Todo = { id: number; text: string; done: boolean };
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecreae}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
