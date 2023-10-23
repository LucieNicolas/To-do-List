import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../style/TaskForm.css";

interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <>
      <div className="form">
        <Form onSubmit={handleNewTaskSubmit} className="task-form">
          <input
            type="text"
            placeholder="Title"
            value={newTaskTitle}
            onChange={(event) => setNewTaskTitle(event.target.value)}
            className="title-input"
          />
          <input
            type="text"
            placeholder="Description"
            value={newTaskDescription}
            onChange={(event) => setNewTaskDescription(event.target.value)}
            className="description-input"
          />
          <button type="submit" className="add-task-button">
            Add new task
          </button>
        </Form>
      </div>
    </>
  );
};

export default TaskForm;
