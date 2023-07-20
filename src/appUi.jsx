import "./App.css";
import { useContext } from "react";
import { TaskContext } from "./components/to-do/contexts/task-context";
// components
import { CompletedTaskCount } from "./components/to-do/count/count";
import { TaskList } from "./components/to-do/task-list/task-list";
import { Nav } from "./components/to-do/nav/nav";
import { TodoTask } from "./components/to-do/task/task";
import { CreateTaskBtn } from "./components/to-do/create-task/create-task";
import { EmptyTodo } from "./components/to-do/empty-todo/empty-todo";
import { ErrorTab } from "./error-message";
import { TaskForm } from "./components/to-do/task-form";
import { Meta } from "./components/to-do/meta";

function AppUi() {
  const { loading, emptyTodoList, searchValue, tasks, getError, showModal } =
    useContext(TaskContext);

  return (
    <main className="main-container">
      <section className="aside-section">
        <div className="child-1">
          <h1 id="title">Todo-List</h1>
          <CompletedTaskCount />
          <Nav />
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
          {searchValue.length > 0 && tasks.length === 0 && !loading && (
            <p className="no-task-found-error">
              There are no coincidences for "{searchValue}"
            </p>
          )}
          {!loading &&
            tasks &&
            tasks.map((task) => (
              <TodoTask
                title={task.title}
                id={task.id}
                key={task.id}
                completed={task.completed}
              />
            ))}
        </TaskList>
      </section>
      {showModal && (
        <Meta>
          <TaskForm />
        </Meta>
      )}
      {getError() && <ErrorTab />}
    </main>
  );
}

export { AppUi };
