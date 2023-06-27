import React from "react";
import { useState } from "react";

import "./App.css";

// custom hooks
import { useLocalStorage } from "./custom-hooks/index";

// components
import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";

function App() {
  // tasks logic
  const {
    getItem: getTasks,
    saveItemsToLocalStorage: saveTasksToLocalStorage,
  } = useLocalStorage("tasks_V1");

  function completeTask(taskTitle) {
    const taskIndex = getTasks().findIndex((task) => task.title === taskTitle);

    if (taskIndex >= 0) {
      const newTaskList = [...getTasks()];
      newTaskList[taskIndex].completed = !newTaskList[taskIndex].completed;
      newTaskList.sort((task1, task2) => {
        if (!task1.completed && task2.completed) {
          return -2;
        } else {
          return 0;
        }
      });
      saveTasksToLocalStorage(newTaskList);
      console.log(getTasks());
    } else {
      console.log("task not found");
    }
  }

  function deleteTask(taskTitle) {
    const indexOfTask = getTasks().findIndex(
      (task) => task.title === taskTitle
    );
    const newTasksArray = [...getTasks()];
    newTasksArray.splice(indexOfTask, 1);
    saveTasksToLocalStorage(newTasksArray);
  }
  // search logic
  const [searchValue, setSearchValue] = useState("");

  const tasksSearched = getTasks().filter((task) => {
    const searchText = searchValue.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(searchText);
  });

  // doom
  let totalTask = getTasks().length;
  let taskCompleted = getTasks().filter((task) => !!task.completed).length;

  let TaskArray;
  if (searchValue === "") {
    TaskArray = getTasks();
  } else {
    TaskArray = tasksSearched;
  }

  function taskOrTasks() {
    if (totalTask > 1) {
      return "tasks";
    } else {
      return "task";
    }
  }

  return (
    // <React.Fragment>
    <main className="main-container">
      <section className="aside-section">
        <div className="child-1">
          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount
            completedTaskCount={taskCompleted}
            totalTaskCount={totalTask}
            taskOrTasks={taskOrTasks()}
          />
          <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <div className="child-2">
          <CreateTaskBtn class="createTaskBtn" />
        </div>
      </section>

      <section className="task-section">
        <TaskList>
          {
            TaskArray.map((task) => (
              <TodoTask
                title={task.title}
                key={task.title}
                completed={task.completed}
                completeTaskFunction={completeTask}
                deleteTaskFunction={deleteTask}
              />
            ))
          }
        </TaskList>
      </section>
    </main>
    // </React.Fragment>
  );
}

export default App;
