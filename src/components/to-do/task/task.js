import "./styles.css";
import { useState } from "react";

function TodoTask({ title, completed, completeTaskFunction }) {

  function setTaskCompleted() {
    completeTaskFunction(title)
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        className="completed-task-icon icon"
        onClick={()  => setTaskCompleted()}
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>

      <main className="task-container">
        <h1
          className={`task-title ${completed === true ? "task-completed" : ""}`}
        >
          {title}
        </h1>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="delete-task-icon icon" onMouseEnter={() => handleMouseEnter(title)} onMouseLeave={handleMouseLeave}>
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>
    </li>
  );
}

export { TodoTask };
