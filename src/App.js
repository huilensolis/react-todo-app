import React from "react";
import { useState } from "react";

import "./App.css";

import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";

function App() {

  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = localStorage.getItem('tasks_V1')
    if(tasksFromLocalStorage){
      return JSON.parse(tasksFromLocalStorage)
    } else{
      return []
    }
  })

  function saveTasksToLocalStorage(tasksArray){
    window.localStorage.setItem('tasks_V1', JSON.stringify(tasksArray))
  }

  // search logic
  const [searchValue, setSearchValue] = useState('');

  const tasksSearched = tasks.filter(task => {
    const searchText = searchValue.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(searchText)
  })

  let tasksContent;
  if(searchValue === ''){
    tasksContent = tasks.map( task => (
      <TodoTask title={task.title} key={task.title} completed={task.completed} completeTaskFunction={completeTask} deleteTaskFunction={deleteTask}/>
    ))
  } else{
    tasksContent = tasksContent = tasksSearched.map( task => (
      <TodoTask title={task.title} key={task.title} completed={task.completed} completeTaskFunction={completeTask}/>
    ))
  }

  let totalTask = tasks.length
  let taskCompleted = tasks.filter(task => !!task.completed).length

  function completeTask(taskTitle){
    const taskIndex = tasks.findIndex(task => task.title === taskTitle)

    if(taskIndex >= 0){
        const newTaskList = [...tasks]
        newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed
        newTaskList.sort((task1, task2) => {
          if(!task1.completed && task2.completed){
            return -2
          } else{
            return 0
          }
        })
        setTasks(newTaskList)
        saveTasksToLocalStorage(newTaskList)
    } else{
      console.log("task not found")
    }
  }
  function deleteTask(taskTitle){
    const indexOfTask = tasks.findIndex(task => task.title === taskTitle)
    const newTasksArray = [...tasks]
    newTasksArray.splice(indexOfTask, 1)
    setTasks(newTasksArray)
    saveTasksToLocalStorage(newTasksArray)
  }

  function taskOrTasks(){
    if(totalTask > 1){
      return 'tasks'
    } else{
      return 'task'
    }
  }

  return (
    // <React.Fragment>
    <main className="main-container">
      <section className="aside-section">
        
        <div className="child-1">

          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount completedTaskCount={taskCompleted} totalTaskCount={totalTask} taskOrTasks={taskOrTasks()}/>
          <Nav searchValue={searchValue} setSearchValue={setSearchValue} />

        </div>

        <div className="child-2">

          <CreateTaskBtn class="createTaskBtn" />

        </div>

      </section>

      <section className="task-section">
        <TaskList>
          {tasksContent}
        </TaskList>
      </section>
    </main>
    // </React.Fragment>
  );
}

export default App;
