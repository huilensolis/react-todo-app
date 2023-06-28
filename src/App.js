import { useState } from "react";

//app ui
import { AppUi } from "./appUi";

// custom hooks
import { useLocalStorage } from "./hooks/index";

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
    <AppUi
      TaskArray={TaskArray}
      totalTask={totalTask}
      taskCompleted={taskCompleted}
      completeTask={completeTask}
      deleteTask={deleteTask}
      taskOrTasks={taskOrTasks}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
