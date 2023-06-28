import "./styles.css";
import { useState } from "react";
import {CheckIcon, CloseIcon} from '../../../svg/bs/index'

function TodoTask({ title, completed, completeTaskFunction, deleteTaskFunction }) {

  function setTaskCompleted() {
    completeTaskFunction(title)
  }
  function deleteTask(){
    deleteTaskFunction(title)
  }
  const [isHovering, setIsHovering] = useState(null)

  function handleMouseEnter(title){
    setIsHovering(title)
  }

  function handleMouseLeave(){
    setIsHovering(null)
  }
  return (
    <li className={isHovering === title ? "maybe-delete-background-red" : ""}>
      <CheckIcon 
        className="completed-task-icon icon"
        onClick={()  => setTaskCompleted()}
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
