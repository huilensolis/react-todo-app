import "./styles.css";
import { TaskContext } from "../contexts/task-context";
import { useContext } from "react";

function CompletedTaskCount() {
  const { totalTasks, taskCompleted } = useContext(TaskContext);

  function taskOrTasks() {
    if (totalTasks > 1) {
      return "tasks";
    } else {
      return "task";
    }
  }
  console.log({ taskCompleted, totalTasks });
  return (
    <>
      {taskCompleted === totalTasks && totalTasks > 0 && (
        <h2 className="count-h2" tabIndex={0}>
          Good job! 👏 <br /> You have completed all your tasks for today
        </h2>
      )}
      {totalTasks === 0 && (
        <h2 className="count-h2" tabIndex={0}>
          it looks a kinda empty here <span className="no-italic">🐻</span> <br /> Try creating some
          new tasks!
        </h2>
      )}
      {taskCompleted !== totalTasks && totalTasks !== 0 && (
        <h2 className="count-h2" tabIndex={0}>
          you have compelte <br /> {taskCompleted} of {taskOrTasks()}
        </h2>
      )}
    </>
  );
}

export { CompletedTaskCount };
