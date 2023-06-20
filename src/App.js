import React from "react";

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

  let totalTask = taskList.length
  let taskCompleted = taskList.filter(task => task.completed === true).length

  return (
    // <React.Fragment>
    <main className="main-container">
      <section className="aside-section">
        
        <div className="child-1">

          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount completedTaskCount={taskCompleted} totalTaskCount={totalTask} />
          <Nav />

        </div>

        <div className="child-2">

          <CreateTaskBtn class="createTaskBtn" />

        </div>

      </section>

      <section className="task-section">
        <TaskList>
          {taskList.map( task => (
            <TodoTask title={task.title} key={task.title} />
          ))}
        </TaskList>
      </section>
    </main>
    // </React.Fragment>
  );
}

export default App;
