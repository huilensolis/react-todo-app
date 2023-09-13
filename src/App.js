import { useEffect, useContext } from "react";
//app ui
import { AppUi } from "./appUi";

// custom hooks
import { TaskContext } from "./components/to-do/contexts/task-context";
function App() {
  const { getTasks, searchValue, setTasks, setLoading, setErrorState } =
    useContext(TaskContext);

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

  return <AppUi />;
}

export default App;
