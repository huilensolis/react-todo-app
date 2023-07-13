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
    if (getTasks().length >= 1) {
      return getTasks();
    } else {
      return [];
    }
  });
  const [totalTasks, setTotalTasks] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const emptyTodoList = Array(5).fill(null);

  useEffect(() => {
    if (tasks) {
      setTaskCompleted(tasks.filter((task) => task.completed).length);
      setTotalTasks(tasks.length);
    }
  }, [tasks]);

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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}