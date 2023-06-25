import './styles.css'


function CompletedTaskCount({completedTaskCount, totalTaskCount}) {

  function taskOrTaks(){
    if(totalTaskCount > 1){
      return 'tasks'
    } else{
      return 'task'
    }
  }

  return (
    <h1 className='count-h1'>You have completed <br /> <span> { completedTaskCount } of { totalTaskCount } {taskOrTaks()} </span> </h1>
  );
}
export { CompletedTaskCount }