import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { FilterValuesType } from "./App";
import { Button } from "./components/Button";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (newTitle: string) => void;
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") addTaskHandler();
  };

  const addTaskHandler = () => {
    props.addTask(title);
    setTitle("");
  };

  const removeTaskHandler = (tId: string) => {
    props.removeTask(tId);
  };

  const tsarHandler = (nameButton: FilterValuesType) => {
    props.changeFilter(nameButton);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <Button name={"+"} callback={addTaskHandler} />
        {/* <button onClick={addTaskHandler}>+</button> */}
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <Button
                name={"x"}
                callback={() => {
                  removeTaskHandler(t.id);
                }}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <Button
          name={"all"}
          callback={() => {
            tsarHandler("all");
          }}
        />
        <Button
          name={"active"}
          callback={() => {
            tsarHandler("active");
          }}
        />
        <Button
          name={"completed"}
          callback={() => {
            tsarHandler("completed");
          }}
        />
        {/* <button onClick={() => tsarHandler("all")}>All</button>
        <button onClick={() => tsarHandler("active")}>Active</button>
        <button onClick={() => tsarHandler("completed")}>Completed</button> */}
      </div>
    </div>
  );
}
