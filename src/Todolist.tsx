import { useState } from "react";
type FilterButtonName = "All" | "Active" | "Completed";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: number) => void;
};

export function Todolist(props: PropsType) {
  let [filterButtonName, setFilterButtonName] =
    useState<FilterButtonName>("All");
  let durshlaq = props.tasks;

  if (filterButtonName === "Active") {
    durshlaq = props.tasks.filter((el) => !el.isDone);
  }
  if (filterButtonName === "Completed") {
    durshlaq = props.tasks.filter((el) => el.isDone);
  }
  const filteredCurrentTasks = (buttonName: FilterButtonName) => {
    setFilterButtonName(buttonName);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {durshlaq.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={() => props.removeTask(el.id)}>x</button>
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            filteredCurrentTasks("All");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            filteredCurrentTasks("Active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            filteredCurrentTasks("Completed");
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
