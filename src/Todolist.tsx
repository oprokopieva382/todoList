import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { FilterValuesType } from "./App";
import { Button } from "./components/Button";
import s from "./Todolist.module.css";

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
  changeStatus: (t: string, eventStatus: boolean) => void;
  filter: FilterValuesType;
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
    setError(null);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") addTaskHandler();
  };

  const addTaskHandler = () => {
    if (title.trim() !== "") {
      props.addTask(title.trim());
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  const removeTaskHandler = (tId: string) => {
    props.removeTask(tId);
  };

  const tsarHandler = (nameButton: FilterValuesType) => {
    props.changeFilter(nameButton);
  };

  const changeStatusHandler = (tID: string, eValue: boolean) => {
    props.changeStatus(tID, eValue);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          className={error ? s.error : ""}
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <Button name={"+"} callback={addTaskHandler} />
        {/* <button onClick={addTaskHandler}>+</button> */}
      </div>
      {error && <div className={s.errorMessage}>{error}</div>}
      <ul>
        {props.tasks.map((t) => {
          // const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
          //   props.changeStatus(t.id, e.currentTarget.checked);
          // };
          return (
            <li key={t.id} className={t.isDone ? s.isDone : ""}>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={(e) =>
                  changeStatusHandler(t.id, e.currentTarget.checked)
                }
              />
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
          filter={props.filter}
          name={"all"}
          callback={() => {
            tsarHandler("all");
          }}
        />
        <Button
          filter={props.filter}
          name={"active"}
          callback={() => {
            tsarHandler("active");
          }}
        />
        <Button
          filter={props.filter}
          name={"completed"}
          callback={() => {
            tsarHandler("completed");
          }}
        />
      </div>
    </div>
  );
}
