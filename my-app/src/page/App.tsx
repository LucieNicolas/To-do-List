import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetails from "../compo/TaskDetails";
import TaskList, { Task } from "../compo/TaskList";
import { tasksListData } from "../data/data";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>(tasksListData);

  const handleIsCompleted = (taskId: number) => {
    const updatedTasksList = tasksList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: true,
        };
      }
      return task;
    });
    setTasksList(updatedTasksList);
  };

  return (
    <div className="App">
      <header>
        <h1>My TODO List</h1>
      </header>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasksList={tasksList}
                handleIsCompleted={handleIsCompleted}
              />
            }
          />
          <Route
            path="/task/:id"
            element={<TaskDetails tasksList={tasksList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
