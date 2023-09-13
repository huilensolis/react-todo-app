import { useContext, useId, useState } from "react";
import { TaskContext } from "../contexts/task-context";
import "./index.css";
export function TaskForm() {
  const { setShowModal, onSubmit } = useContext(TaskContext);
  const [textAreaValue, seTtextAreaValue] = useState(null);

  const taskInputId = useId();

  return (
    <form className="task-form" onSubmit={(e) => onSubmit(e, textAreaValue)}>
      <section className="input-section">
        <label htmlFor={taskInputId}>Task name</label>
        <textarea
          type="text"
          autoFocus={true}
          placeholder="Enter task"
          id={taskInputId}
          onChange={(e) => seTtextAreaValue(e.target.value)}
          className="task-input"
          tabIndex={0}
        />
      </section>
      <section className="buttons-section">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="task-button cancel"
          tabIndex={0}
        >
          cancel
        </button>
        <button type="submit" className="task-button" tabIndex={0}>
          save
        </button>
      </section>
    </form>
  );
}
