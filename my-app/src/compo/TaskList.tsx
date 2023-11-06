import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/TaskList.css";
import TaskForm from "./TaskForm";

export interface Task {
  id: number;
  title: string;
  description?: string;
}

interface TodoListProps {
  tasksList: Task[];
  handleIsCompleted: (
    taskId: number,
    title: string,
    description: string
  ) => void;
}

const TodoList = ({ tasksList, handleIsCompleted }: TodoListProps) => {
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const [listTask, setListTask] = useState(tasksList);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskCompletion = (taskId: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(taskId)) {
      newCheckedItems.delete(taskId);
    } else {
      newCheckedItems.add(taskId);
    }
    setCheckedItems(newCheckedItems);

    const task = listTask.find((task) => task.id === taskId);
    if (task) {
      handleIsCompleted(taskId, task.title || "", task.description || "");
    }

    const newTasksList = listTask.filter((task) => task.id !== taskId);
    setListTask(newTasksList);
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: listTask.length + 1,
      title: title,
      description: description,
    };
    const updatedTasksList = [newTask, ...listTask];
    setListTask(updatedTasksList);

    // Store the updated tasks list in local storage
    localStorage.setItem("tasksList", JSON.stringify(updatedTasksList));
  };

  return (
    <div>
      {/* Render the TaskForm component and add new task to the list*/}
      <TaskForm onAddTask={handleAddTask} />
      {/* Map the task list and render a Card component for each task in the
      list*/}
      {listTask.map((task) => (
        <Card data-testid="task" key={task.id} className="task-card">
          <Card.Body className="card-body">
            <Card.Title className="task-title">{task.title}</Card.Title>
            {/* link to see TaskDetails info with taskId*/}
            <Link to={`/task/${task.id}`}>View Details</Link>
            {/* handle task completion*/}
            <Button
              variant="success"
              onClick={() => handleTaskCompletion(task.id)}
              className="completed-btn"
              data-testid="completedBtn"
            >
              Done
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default TodoList;
