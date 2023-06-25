import './styles.css'

function CompletedTaskCount({completedTaskCount, totalTaskCount, taskOrTasks}) {
  return (
    <h1 className='count-h1'>You have completed <br /> <span> { completedTaskCount } of { totalTaskCount } {taskOrTasks} </span> </h1>
  );
}
export { CompletedTaskCount }