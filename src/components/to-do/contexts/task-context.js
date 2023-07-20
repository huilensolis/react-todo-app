import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../../../hooks";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const {
    getItem: getTasks,
    saveItemsToLocalStorage: saveTasksToLocalStorage,
    getError,
    setErrorState,
  } = useLocalStorage("tasks_V1");

  const [tasks, setTasks] = useState(() => {
    if (getTasks().length >= 0) {
      return getTasks();
    } else {
      return [];
    }
  });
  const [totalTasks, setTotalTasks] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [maxId, setmaxId] = useState(0)
  
  const emptyTodoList = Array(5).fill(null);

  useEffect(() => {
    if (tasks) {
      setTaskCompleted(tasks.filter((task) => task.completed).length);
      setTotalTasks(tasks.length);
      saveTasksToLocalStorage(tasks)
    }
  }, [tasks]);


  function onSubmit(event, textAreaValue) {
    event.preventDefault()
    if (!textAreaValue) return
    try {
        const newTaskList = [...tasks, {
            title: textAreaValue,
            id: maxId + 1,
            completed: false,
        }]
        setmaxId(maxId + 1)
        setTasks(newTaskList)
    } catch (error) {
        console.log(error);
        setErrorState('there is been an error, please try again.')
    } finally{
        setShowModal(false)
    }
}

  return (
    <TaskContext.Provider
      value={{
        loading,
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
        maxId,
        setmaxId,
        onSubmit
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}