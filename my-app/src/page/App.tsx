import TaskList from "../compo/TaskList";
import { tasksListData } from "../data/data";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My TODO List</h1>
        {/* <img src="../images/logo2.png" alt="logo2" /> */}
        {/* <i className="fa fa-check" aria-hidden="true"></i> */}
      </header>
      <TaskList tasksList={tasksListData} />
    </div>
  );
}

export default App;
