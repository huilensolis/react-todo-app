import { useContext } from "react";
import { TaskContext } from "../components/to-do/contexts/task-context";
import "./styles.css";

export function ErrorTab() {
  const { setErrorState, getError } = useContext(TaskContext);

  function closeErrorTab() {
    setErrorState(false);
  }
  return (
    <main className="error">
      <header>
        <figure>
          <button onClick={closeErrorTab}>x</button>
        </figure>
        <p>{getError()}</p>
      </header>
    </main>
  );
}
