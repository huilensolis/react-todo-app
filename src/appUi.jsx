import "./App.css";

// components
import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";

function AppUi(
    {
      TaskArray,
      totalTask,
      taskCompleted,
      completeTask,
      deleteTask,
      taskOrTasks,
      setSearchValue
    }
) {
  return (
    <main className="main-container">
      <section className="aside-section">
        <div className="child-1">
          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount
            completedTaskCount={taskCompleted}
            totalTaskCount={totalTask}
            taskOrTasks={taskOrTasks()}
          />
          <Nav setSearchValue={setSearchValue} />
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
  );
}

export { AppUi };
