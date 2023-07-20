import "./styles.css";
import { useState } from "react";
import { CheckIcon, CloseIcon } from '../../../svg/bs/index'

import { useContext } from "react";
import { TaskContext } from "../contexts/task-context";

function TodoTask({ title, id, completed }) {

  const { getTasks, saveTasksToLocalStorage, setTasks } = useContext(TaskContext)

  function completeTask() {
    const taskIndex = getTasks().findIndex((task) => task.id === id);

    if (taskIndex >= 0) {
      const newTaskList = [...getTasks()];
      newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed;
      saveTasksToLocalStorage(newTaskList);
      setTasks(newTaskList);
    } else {
      console.log("task not found");
    }
  }

  function deleteTask() {
    const indexOfTask = getTasks().findIndex(
      task => task.id === id
    );
    const newTasksArray = [...getTasks()];
    newTasksArray.splice(indexOfTask, 1);
    saveTasksToLocalStorage(newTasksArray);
    setTasks(newTasksArray);
  }

  const [isHovering, setIsHovering] = useState(null)

  function handleMouseEnter(title) {
    setIsHovering(title)
  }

  function handleMouseLeave() {
    setIsHovering(null)
  }
  return (
    <li className={isHovering === title ? "maybe-delete-background-red" : ""}>
      <CheckIcon
        className="completed-task-icon icon"
        onClick={completeTask}
      />
      <main className="task-container">
        <h1
          className={`task-title ${completed === true ? "task-completed" : ""}`}
        >
          {title}
        </h1>
      </main>
      <CloseIcon
        className="delete-task-icon icon" onClick={deleteTask} onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={handleMouseLeave}
      />
    </li>
  );
}

export { TodoTask };
