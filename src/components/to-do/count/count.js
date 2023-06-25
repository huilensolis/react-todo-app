import './styles.css'

function CompletedTaskCount({completedTaskCount, totalTaskCount, taskOrTasks}) {


  let firstLineContent = 'You have completed'
  let secondLineContent = `${completedTaskCount} of ${totalTaskCount} ${taskOrTasks}`

  if(completedTaskCount === totalTaskCount && totalTaskCount > 0){
    firstLineContent = 'Good job! 👏'
    secondLineContent = 'You have completed all your tasks for today'
  } else if(totalTaskCount === 0){
    firstLineContent = 'it looks a kinda empty here 🐻'
    secondLineContent = 'Try creating some new tasks!'
  }
  
  return (
    <h1 className='count-h1'>{firstLineContent} <br /> <span> {secondLineContent} </span> </h1>
  );
}

export {CompletedTaskCount}