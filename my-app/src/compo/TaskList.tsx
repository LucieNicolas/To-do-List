import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../style/TaskList.css";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface TodoListProps {
  tasksList: Task[];
}

const TodoList = ({ tasksList }: TodoListProps) => {
  const [checkedItems, setCheckedItems] = useState(new Set<number>());
  const [listTask, setListTask] = useState(tasksList);

  const handleIsCompleted = (taskId: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(taskId)) {
      newCheckedItems.delete(taskId);
    } else {
      newCheckedItems.add(taskId);
    }
    setCheckedItems(newCheckedItems);

    const newTasksList = listTask.filter((task) => task.id !== taskId);
    setListTask(newTasksList);
  };

  return (
    <div>
      {/* Map the task list and render a Card component for each task in the
      list*/}
      {listTask.map((task) => (
        <Card data-testid="task" key={task.id} className="task-card">
          <Card.Body>
            <Card.Title className="task-title">{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <Button
              variant="success"
              onClick={() => handleIsCompleted(task.id)}
              data-testid="completedBtn"
            ></Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default TodoList;
