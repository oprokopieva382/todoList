import React from "react";
import "./App.css";
import { TaskType, TodoList1 } from "./TodoList1";

function App() {
  const shapka: string = "What to lean";
  const shapka2: string = "What to say";

  const tasks1: TaskType[] = [
    { id: 1, title: "HTML", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS/TS", isDone: false },
  ];
  const tasks2: TaskType[] = [
    { id: 1, title: "Hello world", isDone: true },
    { id: 2, title: "I am happy", isDone: false },
    { id: 3, title: "Yo", isDone: false },
    { id: 3, title: "Yo", isDone: false },
  ];
  return (
    <div className="App">
      <TodoList1 shapka={shapka} tasks={tasks1} />
      <TodoList1 shapka={shapka2} tasks={tasks2} />
    </div>
  );
}

export default App;
