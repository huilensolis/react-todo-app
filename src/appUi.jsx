import "./App.css";

// components
import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";
import { EmptyTodo } from "./components/to-do/empty-todo/empty-todo";

function AppUi({
  TaskArray,
  totalTask,
  taskCompleted,
  completeTask,
  deleteTask,
  taskOrTasks,
  setSearchValue,
  searchValue,
  loading,
  emptyTodoList,
  getError,
  closeErrorTab
}) {
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
          {loading &&
            emptyTodoList.map((empty_todo, index) => {
              return <EmptyTodo key={index} />;
            })}
          {searchValue !== "" && TaskArray.length === 0 && !loading && (
            <p className="no-task-found-error">
              There are no coincidences for "{searchValue}"
            </p>
          )}
          {TaskArray.map((task) => (
            <TodoTask
              title={task.title}
              key={task.title}
              completed={task.completed}
              completeTaskFunction={completeTask}
              deleteTaskFunction={deleteTask}
            />
          ))}
        </TaskList>
      </section>

      {getError() && <main className="error">
        <header>
          <figure>
            <button onClick={closeErrorTab}>x</button>
          </figure>
          <p>
          {getError()}
          </p>
          </header>
        </main>}
    </main>
  );
}

export { AppUi };
