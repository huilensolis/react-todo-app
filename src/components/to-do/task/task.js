import "./styles.css";
import { useState } from "react";
import { CheckIcon, CloseIcon } from "../../../svg/bs/index";

import { useContext } from "react";
import { TaskContext } from "../contexts/task-context";

function TodoTask({ title, id, completed }) {
  const { getTasks, saveTasksToLocalStorage, setTasks } =
    useContext(TaskContext);

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
    const indexOfTask = getTasks().findIndex((task) => task.id === id);
    const newTasksArray = [...getTasks()];
    newTasksArray.splice(indexOfTask, 1);
    saveTasksToLocalStorage(newTasksArray);
    setTasks(newTasksArray);
  }

  const [isHovering, setIsHovering] = useState(null);

  function handleMouseEnter(title) {
    setIsHovering(title);
  }

  function handleMouseLeave() {
    setIsHovering(null);
  }
  return (
    <li
      className={isHovering === title ? "maybe-delete-background-red" : ""}
      tabIndex={0}
    >
      <article className="task-container" tabIndex={0}>
        <CheckIcon
          className="completed-task-icon icon"
          onClick={completeTask}
          tabIndex={0}
        />
        <p className={completed === true ? "task-completed" : ""} tabIndex={0}>
          {title}
        </p>
        <CloseIcon
          className="delete-task-icon icon"
          onClick={deleteTask}
          onMouseEnter={() => handleMouseEnter(title)}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
        />
      </article>
    </li>
  );
}

export { TodoTask };
