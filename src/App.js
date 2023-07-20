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
    totalTasks,
    taskCompleted,
    searchValue,
    setSearchValue,
    emptyTodoList,
    saveTasksToLocalStorage,
    getTasks,
    getError,
    setErrorState,
    setTaskCompleted,
    showModal,
    setShowModal,
    maxId, setmaxId,
    onSubmit
  } = useContext(TaskContext);

  // tasks logic

  // search logic
  const tasksSearched = getTasks().filter((task) => {
    const searchText = searchValue.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(searchText);
  });

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (searchValue.length > 0) {
        setTasks(tasksSearched);
      } else {
        setTasks(getTasks());
      }
      setLoading(false);
    }, 500);
  }, [searchValue]);

  return (
    <TaskContext.Provider
      value={{
        loading,
        onSubmit,
        setLoading,
        tasks,
        setTasks,
        totalTasks,
        taskCompleted,
        setTaskCompleted,
        searchValue,
        setSearchValue,
        emptyTodoList,
        saveTasksToLocalStorage,
        getTasks,
        getError,
        setErrorState,
        showModal,
        setShowModal,
        maxId, setmaxId
      }}
    >
      <AppUi />
    </TaskContext.Provider>
  );
}

export default App;
