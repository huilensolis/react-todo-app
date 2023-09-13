import { useContext } from "react";
import { TaskContext } from "../components/to-do/contexts/task-context";
import "./styles.css";

export function ErrorTab() {
  const { setErrorState, getError } = useContext(TaskContext);

  function closeErrorTab() {
    setErrorState(false);
  }
  return (
    <div className="error" tabIndex={0}>
      <article className="error-article" tabIndex={0}>
        <p tabIndex={0}>{getError()}</p>
        <section className="button-section" tabIndex={0}>
          <button onClick={closeErrorTab} className="close-button" tabIndex={0}>
            Close
          </button>
        </section>
      </article>
    </div>
  );
}
