import { useContext, useId } from "react"
import { TaskContext } from "../contexts/task-context"
import './index.css'
export function TaskForm() {

    const { setShowModal, tasks, setTasks, setErrorState } = useContext(TaskContext)

    function createTask() {
        try {

        } catch (error) {
            setErrorState('there is been an error, please try again.')
        } finally {
            setShowModal(false)
        }
    }

    const taskInput = useId()

    return (
        <form className="task-form">
            <section className="input-section">
                <label htmlFor={taskInput}>Task name</label>
                <input type="text" placeholder="Enter task" id={taskInput} className="task-input" />
            </section>
            <section className="buttons-section">
                <button type="button" onClick={() => setShowModal(false)} className="task-button cancel">cancel</button>
                <button type="button" onClick={createTask} className="task-button">save</button>
            </section>
        </form>
    )
}