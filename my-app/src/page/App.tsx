import TaskList from "../compo/TaskList";

function App() {
  const tasksList = [
    {
      id: 1,
      title: "Buy groceries",
      description: "description1",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Finish project",
      description: "description2",
      isCompleted: false,
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>My TODO List</h1>
        {/* <img src="../images/logo2.png" alt="logo2" /> */}
        {/* <i className="fa fa-check" aria-hidden="true"></i> */}
      </header>
      <TaskList tasksList={tasksList} />
    </div>
  );
}

export default App;
