import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetails from "../compo/TaskDetails";
import TaskList, { Task } from "../compo/TaskList";
import { tasksListData } from "../data/data";

function App() {
  const [tasksList, setTasksList] = useState<Task[]>(tasksListData);

  // Load taskList from local storage
  useEffect(() => {
    const tasksListFromStorage = JSON.parse(
      localStorage.getItem("tasksList") || "[]"
    );
    setTasksList(tasksListFromStorage);
  }, []);

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
      <header></header>
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
