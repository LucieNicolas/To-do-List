import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import TaskForm from "./TaskForm";

describe("TaskForm", () => {
  const onAddTask = jest.fn();

  beforeEach(() => {
    onAddTask.mockClear();
  });

  it("should render TaskForm with title and description inputs", () => {
    const { getByPlaceholderText, getByText } = render(
      <TaskForm onAddTask={onAddTask} />
    );

    expect(getByPlaceholderText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Description")).toBeInTheDocument();
    expect(getByText("Add new task")).toBeInTheDocument();
  });

  it("should call onAddTask when the form is submitted with a non-empty title", async () => {
    render(<TaskForm onAddTask={onAddTask} />);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const submitButton = screen.getByText("Add new task");

    await userEvent.type(titleInput, "New task");
    await userEvent.type(descriptionInput, "Task description");
    await userEvent.click(submitButton);

    expect(onAddTask).toHaveBeenCalledTimes(1);
    expect(onAddTask).toHaveBeenCalledWith("New task", "Task description");
  });

  it("should not call onAddTask when the form is submitted with an empty title", async () => {
    render(<TaskForm onAddTask={onAddTask} />);

    const submitButton = screen.getByText("Add new task");
    await userEvent.click(submitButton);

    expect(onAddTask).not.toHaveBeenCalled();
  });
});
