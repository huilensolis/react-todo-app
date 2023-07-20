import { useContext, useId, useState } from "react"
import { TaskContext } from "../contexts/task-context"
import './index.css'
export function TaskForm() {

    const { setShowModal, setErrorState, setmaxId, setTasks, tasks, maxId, onSubmit } = useContext(TaskContext)
    const [textAreaValue, seTtextAreaValue] = useState(null)

    const taskInputId = useId()

    return (
        <form className="task-form" onSubmit={(e) => onSubmit(e, textAreaValue)}>
            <section className="input-section">
                <label htmlFor={taskInputId}>Task name</label>
                <textarea type="text" autoFocus placeholder="Enter task" id={taskInputId} onChange={(e) => seTtextAreaValue(e.target.value)} className="task-input" />
            </section>
            <section className="buttons-section">
                <button type="button" onClick={() => setShowModal(false)} className="task-button cancel">cancel</button>
                <button type="submit" className="task-button">save</button>
            </section>
        </form>
    )
}