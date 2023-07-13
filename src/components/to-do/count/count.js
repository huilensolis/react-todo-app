import "./styles.css";
import { TaskContext } from "../contexts/task-context";
import { useContext } from "react";

function CompletedTaskCount() {
  const { totalTask, taskCompleted } =
    useContext(TaskContext);

  function taskOrTasks() {
    if (totalTask > 1) {
      return "tasks";
    } else {
      return "task";
    }
  }
  return (
    <>
      <header>
        {taskCompleted === totalTask && totalTask > 0 && (
          <h1 className="count-h1">
            Good job! 👏 <br /> You have completed all your tasks for today
          </h1>
        )}
        {totalTask === 0 && (
          <h1 className="count-h1">
            it looks a kinda empty here 🐻 <br /> Try creating some new tasks!
          </h1>
        )}
        {!taskCompleted === totalTask && !totalTask === 0 && (
          <h1 className="count-h1">
            you have compelte <br /> {taskCompleted} of {taskOrTasks()}
          </h1>
        )}
      </header>
    </>
  );
}

export { CompletedTaskCount };
