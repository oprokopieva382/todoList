import { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let [tasks1, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "ReactJS22", isDone: false },
  ]);
  const removeTask = (taskId: number) => {
    setTasks(tasks1.filter((el) => el.id !== taskId));
  };

  //   let [filterButtonName, setFilterButtonName] =
  //     useState<FilterButtonName>("All");
  //   let durshlaq = tasks1;

  //   if (filterButtonName === "Active") {
  //     durshlaq = tasks1.filter((el) => !el.isDone);
  //   }
  //   if (filterButtonName === "Completed") {
  //     durshlaq = tasks1.filter((el) => el.isDone);
  //   }
  //   const filteredCurrentTasks = (buttonName: FilterButtonName) => {
  //     setFilterButtonName(buttonName);
  //   };

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask} />
    </div>
  );
}

export default App;
