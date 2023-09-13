import "./styles.css";
import { ReactComponent as MagnifyIcon } from "./../../../svg/fontawesome/magnify-icon/magnify.svg";
import { useContext } from "react";
import { TaskContext } from "../contexts/task-context";

function Nav() {
  const { setSearchValue } = useContext(TaskContext);

  function serachTask(event) {
    const InputValue = event.target.value;
    setSearchValue(InputValue);
  }

  return (
    <nav className="task-nav" tabIndex={0}>
      <MagnifyIcon className="search-icon" />
      <input
        type="text"
        className="input-search"
        placeholder="search"
        onChange={(event) => serachTask(event)}
        tabIndex={0}
      />
    </nav>
  );
}

export { Nav };
