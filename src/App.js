import React from "react";
import { useState } from "react";

import "./App.css";

import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";

function App() {
  let taskList = [
    {
      title: "take the dogs for a walk",
      completed: false,
    },
    {
      title: "buy the milk",
      completed: true,
    },
    {
      title: "do the dishes",
      completed: true,
    },
    {
      title: "cook dinner",
      completed: false,
    },
    {
      title: "clean the car",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState(taskList)

  const [searchValue, setSearchValue] = useState('');

  let totalTask = taskList.length
  let taskCompleted = taskList.filter(task => !!task.completed).length

  const tasksSearched = tasks.filter(task => {
    const searchText = searchValue.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(searchText)
  })

  let tasksContent;

  if(searchValue === ''){
    tasksContent = tasks.map( task => (
      <TodoTask title={task.title} key={task.title} completed={task.completed} />
    ))
  } else{
    tasksContent = tasksContent = tasksSearched.map( task => (
      <TodoTask title={task.title} key={task.title} completed={task.completed} />
    ))
  }

  return (
    // <React.Fragment>
    <main className="main-container">
      <section className="aside-section">
        
        <div className="child-1">

          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount completedTaskCount={taskCompleted} totalTaskCount={totalTask} />
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
