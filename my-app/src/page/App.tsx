import { useState } from "react";
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
      <TaskList
        tasksList={tasksListData}
        handleIsCompleted={handleIsCompleted}
      />
    </div>
  );
}

export default App;
