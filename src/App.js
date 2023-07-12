import { useEffect, useContext } from "react";
//app ui
import { AppUi } from "./appUi";

// custom hooks
import { TaskContext } from "./components/to-do/contexts/task-context";
function App() {
  const {
    loading,
    setLoading,
    tasks,
    setTasks,
    totalTask,
    taskCompleted,
    searchValue,
    setSearchValue,
    emptyTodoList,
    saveTasksToLocalStorage,
    getTasks,
    getError,
    setErrorState,
  } = useContext(TaskContext);

  // tasks logic

  function closeErrorTab() {
    setErrorState(false);
  }

  function completeTask(id) {
    const taskIndex = getTasks().findIndex((task) => task.id === id);

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
      setTasks(newTaskList);
    } else {
      console.log("task not found");
    }
  }

  function deleteTask(id) {
    const indexOfTask = getTasks().findIndex(
      (task) => task.title === id
    );
    const newTasksArray = [...getTasks()];
    newTasksArray.splice(indexOfTask, 1);
    saveTasksToLocalStorage(newTasksArray);
    setTasks(newTasksArray);
  }

  // search logic
  const tasksSearched = getTasks().filter((task) => {
    const searchText = searchValue.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(searchText);
  });

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (searchValue.length > 0) {
        setTasks(tasksSearched);
      } else{
        setTasks(getTasks())
      }
    }, 1000);
  }, [searchValue]);

  function taskOrTasks() {
    if (totalTask > 1) {
      return "tasks";
    } else {
      return "task";
    }
  }
  return (
    <AppUi
      TaskArray={tasks}
      totalTask={totalTask}
      taskCompleted={taskCompleted}
      completeTask={completeTask}
      deleteTask={deleteTask}
      taskOrTasks={taskOrTasks}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      loading={loading}
      emptyTodoList={emptyTodoList}
      getError={getError}
      closeErrorTab={closeErrorTab}
    />
  );
}

export default App;
