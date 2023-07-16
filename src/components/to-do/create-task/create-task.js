import { useContext } from 'react'
import './styles.css'
import { TaskContext } from '../contexts/task-context'

function CreateTaskBtn() {
    const { setShowModal } = useContext(TaskContext)
    return (
        <button id="create-task-btn" type='button' onClick={() => setShowModal(true)}>Create Task</button>
    )
}

export { CreateTaskBtn }