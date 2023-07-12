import "./styles.css";
import { ReactComponent as MagnifyIcon }  from './../../../svg/fontawesome/magnify-icon/magnify.svg'

function Nav({ setSearchValue }) {
  function serachTask(event) {
    const InputValue = event.target.value;
    setSearchValue(InputValue);
  }

  return (
    <nav className="task-nav">
      <MagnifyIcon className="search-icon" />
      <input
        type="text"
        className="input-search"
        placeholder="search"
        onChange={(event) => serachTask(event)}
      />
    </nav>
  );
}

export { Nav };
