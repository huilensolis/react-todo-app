import './styles.css'


function CompletedTaskCount({completedTaskCount, totalTaskCount}) {
  return (
    <h1 id='count-h1'>You have completed <br /> { completedTaskCount } of { totalTaskCount } task</h1>
  );
}
export { CompletedTaskCount }